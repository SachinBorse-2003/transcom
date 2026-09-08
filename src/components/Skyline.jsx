/**
 * Gulf-city skyline silhouette used as a parallax backdrop behind the truck.
 * One wide strip, drawn twice by the stage so it can scroll seamlessly.
 */
export default function Skyline({ className = '', fill = 'currentColor' }) {
  return (
    <svg viewBox="0 0 1200 220" preserveAspectRatio="none" className={className} aria-hidden="true">
      <g fill={fill}>
        {/* low-rise block */}
        <rect x="0" y="150" width="90" height="70" />
        <rect x="96" y="128" width="54" height="92" />
        <rect x="156" y="164" width="70" height="56" />
        {/* stepped tower */}
        <path d="M236 220V96h44v-18h20v18h44v124z" />
        <rect x="352" y="140" width="60" height="80" />
        {/* spire — the tall one */}
        <path d="M436 220V84h18V54h10l10-30 10 30h10v30h18v136z" />
        <rect x="524" y="128" width="76" height="92" />
        <rect x="612" y="160" width="46" height="60" />
        {/* twin towers */}
        <path d="M672 220V110h40v-22h16v22h40v110z" />
        <rect x="784" y="146" width="64" height="74" />
        {/* sail-shaped tower */}
        <path d="M866 220V128c0-34 22-58 52-66v158z" />
        <rect x="932" y="152" width="52" height="68" />
        <path d="M996 220V104h16V78h12v26h16v116z" />
        <rect x="1052" y="140" width="58" height="80" />
        <rect x="1120" y="166" width="80" height="54" />
      </g>
    </svg>
  )
}
