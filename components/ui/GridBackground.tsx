export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full opacity-20">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1800 1260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g>
          {/* Grid Pattern */}
          {[...Array(50)].map((_, i) => (
            <g key={i}>
              {[...Array(35)].map((_, j) => (
                <rect
                  key={j}
                  x={i * 36}
                  y={j * 36}
                  width="36"
                  height="36"
                  stroke="currentColor"
                  strokeOpacity="0.1"
                  strokeWidth="0.5"
                  fill="none"
                />
              ))}
            </g>
          ))}
          
          {/* Accent squares */}
          <rect x="216" y="216" width="36" height="36" fill="currentColor" fillOpacity="0.05" />
          <rect x="612" y="288" width="36" height="36" fill="currentColor" fillOpacity="0.08" />
          <rect x="396" y="360" width="36" height="36" fill="currentColor" fillOpacity="0.06" />
          <rect x="828" y="252" width="36" height="36" fill="currentColor" fillOpacity="0.07" />
          <rect x="1044" y="324" width="36" height="36" fill="currentColor" fillOpacity="0.06" />
          <rect x="288" y="432" width="36" height="36" fill="currentColor" fillOpacity="0.05" />
          <rect x="720" y="396" width="36" height="36" fill="currentColor" fillOpacity="0.07" />
          <rect x="144" y="504" width="36" height="36" fill="currentColor" fillOpacity="0.06" />
          <rect x="936" y="468" width="36" height="36" fill="currentColor" fillOpacity="0.05" />
          <rect x="504" y="540" width="36" height="36" fill="currentColor" fillOpacity="0.08" />
          <rect x="1188" y="396" width="36" height="36" fill="currentColor" fillOpacity="0.06" />
          <rect x="72" y="648" width="36" height="36" fill="currentColor" fillOpacity="0.07" />
          <rect x="1332" y="576" width="36" height="36" fill="currentColor" fillOpacity="0.05" />
          <rect x="360" y="684" width="36" height="36" fill="currentColor" fillOpacity="0.06" />
        </g>
      </svg>
    </div>
  )
}