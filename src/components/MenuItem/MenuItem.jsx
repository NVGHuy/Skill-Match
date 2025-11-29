import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
function MenuItem({ icon, text, onClick, active = false }) {
  const IconComponent = icon
  return (
    <Box>
      <Box
        onClick={onClick}
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          gap: 2,
          cursor: 'pointer',
          color: (theme) => active ? theme.palette.primary.main : (theme.palette.mode === 'dark' ? 'white' : '#3e2098ff'),
          fontWeight: active ? 700 : 400,
          '&:hover': {
            color: (theme) => theme.palette.mode === 'dark' ? '#dad2d2ff' : '#2e0383ff',
            transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
            transform: 'scale(1.02) ',
            transformOrigin: 'left center'
          }
        }}>
        <IconComponent sx={{ fontSize: 40 }} />
        <Typography variant='h5' sx={{ fontSize: 25 }}>{text}</Typography>
      </Box>
      <Divider sx={{ mt: 2 }} />
    </Box>
  )
}

export default MenuItem