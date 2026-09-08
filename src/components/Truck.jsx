import { forwardRef } from 'react'

/**
 * Side-view container truck, facing right. Two hooks for the scroll stage:
 * `.truck-wheel` groups spin, and `.truck-lamp` is the headlight glow whose
 * opacity tracks speed.
 */
const Truck = forwardRef(function Truck({ className = '' }, ref) {
  const wheelStyle = { transformBox: 'fill-box', transformOrigin: 'center' }

  const Wheel = ({ cx, r = 17 }) => (
    <g>
      <circle cx={cx} cy={112} r={r} fill="#04121f" />
      <circle cx={cx} cy={112} r={r} fill="none" stroke="#1a4368" strokeWidth="2.5" />
      <g className="truck-wheel" style={wheelStyle}>
        <circle cx={cx} cy={112} r={r * 0.5} fill="#d9a441" />
        <circle cx={cx} cy={112} r={r * 0.16} fill="#04121f" />
        <g stroke="#04121f" strokeWidth="2.2" strokeLinecap="round" opacity="0.9">
          <line x1={cx} y1={112 - r * 0.46} x2={cx} y2={112 + r * 0.46} />
          <line x1={cx - r * 0.46} y1={112} x2={cx + r * 0.46} y2={112} />
          <line x1={cx - r * 0.33} y1={112 - r * 0.33} x2={cx + r * 0.33} y2={112 + r * 0.33} />
          <line x1={cx - r * 0.33} y1={112 + r * 0.33} x2={cx + r * 0.33} y2={112 - r * 0.33} />
        </g>
      </g>
    </g>
  )

  return (
    <svg ref={ref} viewBox="0 0 400 150" className={className} role="img" aria-label="Container truck">
      <defs>
        <linearGradient id="truck-container" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a4368" />
          <stop offset="100%" stopColor="#0d2b45" />
        </linearGradient>
        <linearGradient id="truck-cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#235682" />
          <stop offset="100%" stopColor="#123453" />
        </linearGradient>
        <radialGradient id="truck-beam" cx="0" cy="0.5" r="1">
          <stop offset="0%" stopColor="#ffd98a" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Headlight beam — sits behind the body so it spills forward only */}
      <g className="truck-lamp">
        <path d="M330 82l64-22v46z" fill="url(#truck-beam)" />
        <circle cx="331" cy="82" r="7" fill="#ffd98a" opacity="0.55" />
      </g>

      {/* Trailer */}
      <rect x="10" y="18" width="238" height="78" rx="3" fill="url(#truck-container)" />
      <rect x="10" y="18" width="238" height="78" rx="3" fill="none" stroke="#d9a441" strokeWidth="2" />
      <rect x="10" y="18" width="238" height="10" rx="3" fill="#d9a441" opacity="0.9" />
      <rect x="10" y="88" width="238" height="8" fill="#04121f" opacity="0.35" />
      <g stroke="#04121f" strokeWidth="1.4" opacity="0.35">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={26 + i * 19} y1="31" x2={26 + i * 19} y2="87" />
        ))}
      </g>
      <text
        x="129"
        y="64"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Sora, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="3.6"
      >
        TRANSCOM
      </text>
      <text
        x="129"
        y="80"
        textAnchor="middle"
        fill="#d9a441"
        fontFamily="Inter, sans-serif"
        fontSize="8"
        letterSpacing="2.6"
      >
        GENERAL TRADING
      </text>

      {/* Chassis, fuel tank, mudflap */}
      <rect x="10" y="96" width="322" height="7" rx="2" fill="#0d2b45" />
      <rect x="150" y="99" width="34" height="12" rx="4" fill="#123453" />
      <rect x="6" y="92" width="6" height="22" rx="2" fill="#04121f" opacity="0.8" />

      {/* Cab */}
      <path
        d="M254 96V52c0-3 2-5 5-5h22c2 0 4 1 5 3l18 26h18c3 0 5 2 5 5v15z"
        fill="url(#truck-cab)"
        stroke="#d9a441"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M264 56h17l13 20h-30z" fill="#8fc4ea" opacity="0.85" />
      <path d="M264 56h17l4 20h-21z" fill="#ffffff" opacity="0.18" />
      <rect x="256" y="80" width="20" height="3" rx="1.5" fill="#04121f" opacity="0.35" />
      <rect x="322" y="70" width="10" height="16" rx="2" fill="#d9a441" />
      <rect x="322" y="88" width="12" height="6" rx="2" fill="#0d2b45" />
      <rect x="248" y="38" width="8" height="16" rx="2" fill="#0d2b45" />
      <path d="M300 50h12v4h-12z" fill="#0d2b45" />

      <Wheel cx={70} />
      <Wheel cx={122} />
      <Wheel cx={290} r={18} />
    </svg>
  )
})

export default Truck
