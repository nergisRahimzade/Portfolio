import Box from '@mui/material/Box'

const navy = '#1a3554'
const brown = '#5c4032'
const cream = '#fffef6'
const pink = '#ffb8cf'
const green = '#a8dcb8'
const yellow = '#ffe566'

const sketchStroke = {
  fill: 'none',
  strokeWidth: 2.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Friendly blob character — sketch style */
function DoodleBlob() {
  return (
    <svg width="120" height="130" viewBox="0 0 120 130" aria-hidden>
      <ellipse cx="58" cy="68" rx="48" ry="52" fill={cream} stroke={navy} strokeWidth="2.8" />
      <path
        {...sketchStroke}
        stroke={navy}
        d="M22 62 Q10 48 18 38 Q26 28 38 34"
      />
      <path
        {...sketchStroke}
        stroke={navy}
        d="M94 62 Q106 48 98 38 Q90 28 78 34"
      />
      <circle cx="44" cy="58" r="5" fill={navy} />
      <circle cx="72" cy="58" r="5" fill={navy} />
      <path {...sketchStroke} stroke={brown} d="M44 78 Q58 88 72 78" />
      <circle cx="58" cy="28" r="6" fill={yellow} stroke={navy} strokeWidth="2" />
      <path {...sketchStroke} stroke={navy} d="M58 22 L58 12" />
    </svg>
  )
}

/** Tiny robot waving */
function DoodleRobot() {
  return (
    <svg width="100" height="118" viewBox="0 0 100 118" aria-hidden>
      <rect
        x="22"
        y="28"
        width="56"
        height="48"
        rx="12"
        fill={cream}
        stroke={navy}
        strokeWidth="2.8"
      />
      <circle cx="40" cy="50" r="5" fill={navy} />
      <circle cx="60" cy="50" r="5" fill={navy} />
      <path {...sketchStroke} stroke={brown} d="M38 64 H62" />
      <path
        {...sketchStroke}
        stroke={navy}
        d="M50 28 V18 Q50 8 58 8 Q66 8 66 18"
      />
      <circle cx="58" cy="6" r="4" fill={pink} stroke={navy} strokeWidth="2" />
      <path {...sketchStroke} stroke={navy} d="M22 40 L8 32 M22 52 L6 52 M22 64 L10 72" />
      <path {...sketchStroke} stroke={navy} d="M78 40 L92 28 M78 52 L96 52 M78 64 L90 76" />
      <path {...sketchStroke} stroke={green} d="M34 76 L30 98 M50 76 V102 M66 76 L70 98" />
      <ellipse cx="50" cy="108" rx="28" ry="6" fill={yellow} opacity={0.55} stroke={navy} strokeWidth="1.5" />
    </svg>
  )
}

/** Plant in pot */
function DoodlePlant() {
  return (
    <svg width="88" height="112" viewBox="0 0 88 112" aria-hidden>
      <path
        d="M24 88 L28 102 H60 L64 88 Z"
        fill={cream}
        stroke={navy}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path {...sketchStroke} stroke={brown} d="M20 88 H68" />
      <path {...sketchStroke} stroke={green} d="M44 88 Q34 62 38 44 Q42 28 44 20" />
      <path {...sketchStroke} stroke={green} d="M44 88 Q52 58 50 38" />
      <path {...sketchStroke} stroke={green} d="M44 88 Q30 72 26 56" />
      <ellipse cx="44" cy="18" rx="10" ry="8" fill={green} opacity={0.65} stroke={navy} strokeWidth="2" />
      <circle cx="32" cy="52" r="6" fill={pink} opacity={0.7} stroke={navy} strokeWidth="1.5" />
    </svg>
  )
}

/** Stars and sparkles */
function DoodleSparkles() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" aria-hidden>
      <path
        d="M45 8 L48 22 L62 22 L51 30 L55 44 L45 36 L35 44 L39 30 L28 22 L42 22 Z"
        fill={yellow}
        stroke={navy}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M72 52 L74 60 L82 60 L76 64 L78 72 L72 68 L66 72 L68 64 L62 60 L70 60 Z"
        fill={pink}
        stroke={navy}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="70" r="4" fill={green} stroke={navy} strokeWidth="1.8" />
      <path {...sketchStroke} stroke={navy} d="M12 28 L16 32 M14 24 L18 28" />
    </svg>
  )
}

/** Wavy scribble underline */
function DoodleWaves() {
  return (
    <svg width="200" height="24" viewBox="0 0 200 24" aria-hidden style={{ maxWidth: '100%' }}>
      <path
        d="M4 14 Q24 4 44 14 T84 14 T124 14 T164 14 T196 14"
        fill="none"
        stroke={pink}
        strokeWidth="3"
        strokeLinecap="round"
        opacity={0.85}
      />
    </svg>
  )
}

export function SketchDecorations() {
  return (
    <>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: { xs: 4, md: 24 },
          left: { xs: 8, md: 24 },
          opacity: 0.95,
          transform: { xs: 'scale(0.68)', md: 'none' },
          pointerEvents: 'none',
        }}
      >
        <DoodleBlob />
      </Box>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: { xs: 120, md: 140 },
          right: { xs: -4, md: 48 },
          opacity: 0.95,
          pointerEvents: 'none',
        }}
      >
        <DoodleSparkles />
      </Box>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: { xs: 80, md: 120 },
          left: { xs: 8, md: 64 },
          opacity: 0.92,
          pointerEvents: 'none',
        }}
      >
        <DoodleRobot />
      </Box>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: { xs: 24, md: 40 },
          right: { xs: 12, md: 80 },
          opacity: 0.92,
          pointerEvents: 'none',
        }}
      >
        <DoodlePlant />
      </Box>
    </>
  )
}

export { DoodleWaves }
