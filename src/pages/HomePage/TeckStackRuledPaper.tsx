import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Palette from Figma link:
// https://www.figma.com/color-palette-generator/?colors=213885-081849-ECDFD2-CCCACC-5F3475-893172
const cream = '#ECDFD2'

const paperLine = 'rgba(33, 56, 133, 0.22)'
const paperInk = '#081849'

const techStack = ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Java'] as const

const RULED_LINE_PX = 28


export function TechStackRuledPaper() {
  return (
    <Box
      component="section"
      aria-labelledby="tech-stack-heading"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid rgba(236, 223, 210, 0.35)',
        boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.28)',
        transform: 'rotate(-0.35deg)',
        maxWidth: 720,
        mx: 'auto',
      }}
    >
      {/* Light “paper” sheet on dark background */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: cream,
          color: paperInk,
          pl: { xs: 2.25, sm: 3 },
          pr: { xs: 2, sm: 2.5 },
          pt: 2.25,
          pb: 2,
          /* Ruled lines */
          backgroundImage: `repeating-linear-gradient(
            transparent 0,
            transparent ${RULED_LINE_PX - 1}px,
            ${paperLine} ${RULED_LINE_PX - 1}px,
            ${paperLine} ${RULED_LINE_PX}px
          )`,
          backgroundSize: `100% ${RULED_LINE_PX}px`,
          backgroundPosition: '0 12px',
        }}
      >
        {/* Red margin line (notebook) */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 12,
            bottom: 12,
            left: { xs: 18, sm: 22 },
            width: 3,
            borderRadius: 1,
            bgcolor: '#d64550',
            opacity: 0.95,
          }}
        />

        <Box sx={{ pl: { xs: 2.5, sm: 3.25 } }}>
          <Typography
            id="tech-stack-heading"
            variant="h3"
            component="h2"
            sx={{
              fontFamily: '"Syne", "Nunito", sans-serif',
              fontWeight: 800,
              fontSize: '1.35rem',
              lineHeight: `${RULED_LINE_PX}px`,
              mb: `${RULED_LINE_PX}px`,
              color: paperInk,
            }}
          >
            Tech Stack
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(8, 24, 73, 0.72)',
              lineHeight: `${RULED_LINE_PX}px`,
              mb: `${RULED_LINE_PX}px`,
            }}
          >
            Things I use day-to-day — written like a little checklist.
          </Typography>

          <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {techStack.map((item) => (
              <Box
                key={item}
                component="li"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  minHeight: RULED_LINE_PX,
                  lineHeight: `${RULED_LINE_PX}px`,
                }}
              >
                <Box
                  aria-hidden
                  sx={{
                    width: 14,
                    height: 14,
                    border: `2px solid ${paperInk}`,
                    borderRadius: 0.75,
                    opacity: 0.85,
                    flex: '0 0 auto',
                    mt: '2px',
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontFamily: '"Nunito", sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.01em',
                    color: paperInk,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}