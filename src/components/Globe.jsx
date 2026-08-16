import { useEffect, useRef, useState } from 'react'
import {
  BackSide,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  DoubleSide,
  Group,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  QuadraticBezierCurve3,
  RingGeometry,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from 'three'
import { LAND_POINTS } from '../data/landPoints'
import { tradeHub, tradeRoutes } from '../data/site'

const RADIUS = 1
const NAVY = new Color('#0d2b45')
const DOT = new Color('#63a6dc')
const GOLD = new Color('#d9a441')
const GOLD_LIGHT = new Color('#ecc776')

/** Lat/lon (degrees) → a point on the sphere. */
function toVector(lat, lon, radius = RADIUS) {
  const phi = ((90 - lat) * Math.PI) / 180
  const theta = ((lon + 180) * Math.PI) / 180
  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

/** A great-circle-ish arc that bows away from the sphere by its span. */
function arcCurve(from, to) {
  const start = toVector(from.lat, from.lon)
  const end = toVector(to.lat, to.lon)
  const angle = start.angleTo(end)
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize()
  mid.multiplyScalar(RADIUS + angle * 0.38)
  return new QuadraticBezierCurve3(start, mid, end)
}

/**
 * Trade-route globe. Renders land as a dot matrix, arcs from Dubai to the
 * markets TRANSCOM ships to, and a pulse travelling each arc.
 *
 * Everything is created once and disposed on unmount; the only per-frame work
 * is a rotation update and advancing the pulse positions.
 */
export default function Globe({ className = '' }) {
  const mountRef = useRef(null)
  const [unsupported, setUnsupported] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let renderer
    try {
      renderer = new WebGLRenderer({ alpha: true, antialias: true })
    } catch {
      setUnsupported(true) // No WebGL — fall back to a plain CSS sphere.
      return undefined
    }

    const size = () => ({ w: mount.clientWidth || 1, h: mount.clientHeight || 1 })
    const { w, h } = size()

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new Scene()
    const camera = new PerspectiveCamera(34, w / h, 0.1, 100)
    camera.position.set(0, 0.3, 3.55)
    camera.lookAt(0, 0, 0)

    const world = new Group()
    // Tilt so the northern hemisphere — where the routes are — faces the viewer.
    world.rotation.x = 0.28
    // Rotate Dubai to face the camera, then ease east so Asia stays in frame.
    const hubVector = toVector(tradeHub.lat, tradeHub.lon)
    world.rotation.y = -Math.atan2(hubVector.x, hubVector.z) - 0.35
    scene.add(world)

    /* ── Ocean sphere: hides dots on the far side ─────────────────────────── */
    const ocean = new Mesh(
      new SphereGeometry(RADIUS * 0.992, 64, 64),
      new MeshBasicMaterial({ color: NAVY }),
    )
    world.add(ocean)

    // A soft rim so the sphere reads as a ball rather than a flat disc.
    const rim = new Mesh(
      new SphereGeometry(RADIUS * 1.045, 64, 64),
      new ShaderMaterial({
        transparent: true,
        side: BackSide,
        depthWrite: false,
        uniforms: { uColor: { value: new Color('#4e8fc4') } },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.6);
            gl_FragColor = vec4(uColor, clamp(intensity, 0.0, 1.0) * 0.85);
          }
        `,
      }),
    )
    world.add(rim)

    /* ── Land dots ────────────────────────────────────────────────────────── */
    const count = LAND_POINTS.length / 2
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const v = toVector(LAND_POINTS[i * 2] / 10, LAND_POINTS[i * 2 + 1] / 10, RADIUS * 1.002)
      positions.set([v.x, v.y, v.z], i * 3)
    }
    const landGeometry = new BufferGeometry()
    landGeometry.setAttribute('position', new BufferAttribute(positions, 3))
    const land = new Points(
      landGeometry,
      new PointsMaterial({ color: DOT, size: 0.023, sizeAttenuation: true, transparent: true, opacity: 1 }),
    )
    world.add(land)

    /* ── Routes ───────────────────────────────────────────────────────────── */
    const pulses = []
    const disposables = [ocean.geometry, ocean.material, rim.geometry, rim.material, landGeometry, land.material]

    tradeRoutes.forEach((destination, i) => {
      const curve = arcCurve(tradeHub, destination)
      const geometry = new BufferGeometry().setFromPoints(curve.getPoints(64))
      const line = new Line(
        geometry,
        new LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.4 }),
      )
      world.add(line)
      disposables.push(geometry, line.material)

      // Destination marker
      const markerGeometry = new SphereGeometry(0.011, 10, 10)
      const markerMaterial = new MeshBasicMaterial({ color: GOLD_LIGHT })
      const marker = new Mesh(markerGeometry, markerMaterial)
      marker.position.copy(toVector(destination.lat, destination.lon, RADIUS * 1.006))
      world.add(marker)
      disposables.push(markerGeometry, markerMaterial)

      // Travelling pulse — staggered so they don't all leave Dubai together
      const pulseGeometry = new SphereGeometry(0.016, 10, 10)
      const pulseMaterial = new MeshBasicMaterial({ color: GOLD_LIGHT, transparent: true })
      const pulse = new Mesh(pulseGeometry, pulseMaterial)
      world.add(pulse)
      disposables.push(pulseGeometry, pulseMaterial)
      pulses.push({ mesh: pulse, curve, offset: i / tradeRoutes.length, speed: 0.18 + (i % 4) * 0.03 })
    })

    /* ── Dubai marker with a halo ─────────────────────────────────────────── */
    const hub = toVector(tradeHub.lat, tradeHub.lon, RADIUS * 1.008)
    const hubGeometry = new SphereGeometry(0.024, 14, 14)
    const hubMaterial = new MeshBasicMaterial({ color: GOLD })
    const hubMesh = new Mesh(hubGeometry, hubMaterial)
    hubMesh.position.copy(hub)
    world.add(hubMesh)

    const haloGeometry = new RingGeometry(0.032, 0.038, 32)
    const haloMaterial = new MeshBasicMaterial({
      color: GOLD,
      transparent: true,
      opacity: 0.6,
      side: DoubleSide,
    })
    const halo = new Mesh(haloGeometry, haloMaterial)
    halo.position.copy(hub)
    halo.lookAt(hub.clone().multiplyScalar(2))
    world.add(halo)
    disposables.push(hubGeometry, hubMaterial, haloGeometry, haloMaterial)

    /* ── Pointer drag ─────────────────────────────────────────────────────── */
    let dragging = false
    let lastX = 0
    let velocity = 0

    const onDown = (e) => {
      dragging = true
      lastX = e.clientX
      mount.setPointerCapture?.(e.pointerId)
    }
    const onMove = (e) => {
      if (!dragging) return
      const dx = e.clientX - lastX
      lastX = e.clientX
      world.rotation.y += dx * 0.005
      velocity = dx * 0.005
    }
    const onUp = (e) => {
      dragging = false
      mount.releasePointerCapture?.(e.pointerId)
    }

    mount.addEventListener('pointerdown', onDown)
    mount.addEventListener('pointermove', onMove)
    mount.addEventListener('pointerup', onUp)
    mount.addEventListener('pointercancel', onUp)
    mount.addEventListener('pointerleave', onUp)

    /* ── Loop ─────────────────────────────────────────────────────────────── */
    const clock = new Clock()
    let frame
    let elapsed = 0

    const render = () => {
      // getElapsedTime() consumes the delta, so track it from one source.
      const delta = Math.min(clock.getDelta(), 0.05)
      elapsed += delta

      if (!dragging) {
        // Slow enough that Dubai stays roughly front-of-frame while reading.
        world.rotation.y += velocity + (reduced ? 0 : delta * 0.045)
        velocity *= 0.94
      }

      if (!reduced) {
        pulses.forEach((p) => {
          const t = (elapsed * p.speed + p.offset) % 1
          p.mesh.position.copy(p.curve.getPoint(t))
          // Fade in and out at the ends of the run
          p.mesh.material.opacity = Math.sin(t * Math.PI) ** 0.6
        })
        halo.scale.setScalar(1 + Math.sin(elapsed * 1.8) * 0.18)
        haloMaterial.opacity = 0.35 + Math.sin(elapsed * 1.8) * 0.25
      }

      renderer.render(scene, camera)
      frame = requestAnimationFrame(render)
    }
    render()

    /* ── Resize ───────────────────────────────────────────────────────────── */
    const resize = () => {
      const { w: nw, h: nh } = size()
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(mount)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      mount.removeEventListener('pointerdown', onDown)
      mount.removeEventListener('pointermove', onMove)
      mount.removeEventListener('pointerup', onUp)
      mount.removeEventListener('pointercancel', onUp)
      mount.removeEventListener('pointerleave', onUp)
      disposables.forEach((d) => d.dispose?.())
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={`relative touch-pan-y [&>canvas]:relative [&>canvas]:cursor-grab [&>canvas]:active:cursor-grabbing ${className}`}
      aria-hidden="true"
    >
      {unsupported && (
        <span className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_34%_28%,var(--color-navy-700),var(--color-navy-950)_70%)] ring-1 ring-navy-500/30" />
      )}
    </div>
  )
}
