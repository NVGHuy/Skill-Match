import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import LogoutIcon from '@mui/icons-material/Logout'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Link } from 'react-router-dom'
function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <AccountCircleIcon sx={{ fontSize: 40, cursor: 'pointer', color: (theme) => theme.palette.mode === 'dark' ? 'white' : '#1570adff' }}
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button'
          }
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiButtonBase-root ': { minHeight: 40 },
          '& .MuiMenu-paper': {
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#2C2C2C' : 'white',
            borderRadius: '15px'
          }
        }}
      >
        <MenuItem onClick={handleClose} >
          <Link to='/settings/information'>
            <ListItemIcon>
              <AccountCircleIcon sx={{ mr: 1, color: 'rgb(64, 95, 189)' }} />
            </ListItemIcon>
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon sx={{ mr: 1, color: '#ff0000a3' }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile