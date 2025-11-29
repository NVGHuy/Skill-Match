import Box from '@mui/material/Box'
import React from 'react'
import ModeSelect from '../ModeSelect/ModeSelect'
import logo from '../../assets/logo.png'
import Typography from '@mui/material/Typography'
import Profile from './Menu/Profile.jsx'
import Notification from './Notification/Notification'
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: (theme) => theme.palette.mode === 'dark' ? '#1E1E1E' : 'white',
        borderBottom: '0.5px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? '#3A3A3A' : '#E0E0E0'
        // position: 'fixed',
      }}
    >
      <Box gap={2} sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <img src={logo} alt="Logo" width={45} height={45} />
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"CMU Serif", serif',
            fontWeight: 700,
            width: '70px',
            lineHeight: 1.2,
            color: '#3E71D0',
            fontSize: '20px'
          }} >SKILL MATCH</Typography>
      </Box>
      <Box gap={2}
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ModeSelect />
        <Notification />
        <Profile />
      </Box>

    </Box>
  )
}

export default AppBar