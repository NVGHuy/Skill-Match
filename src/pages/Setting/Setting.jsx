import Box from '@mui/material/Box'
import React from 'react'
import AppBar from '~/components/AppBar/AppBar'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuItem from '~/components/MenuItem/MenuItem'
import SecurityIcon from '@mui/icons-material/Security'
import HelpIcon from '@mui/icons-material/Help'
import Information from './Information.jsx'
import { useState, useEffect } from 'react'
import NotificationTab from './NotificationTab.jsx'
import { useLocation, useNavigate } from 'react-router-dom'

const TABS = {
  INFORMATION: 'information',
  NOTIFICATION: 'notification',
  SECURITY: 'security',
  HELP: 'help'
}
function Setting() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = useState(TABS.INFORMATION)
  useEffect(() => {
    const tab = Object.values(TABS).find(tab => location.pathname.includes(tab)) || TABS.INFORMATION
    setSelectedTab(tab)
  }, [location.pathname])
  return (
    <>
      <AppBar />
      <Box sx={{
        width: 'inherit',
        height: (theme) => theme.trello.contentHeight,
        display: 'flex'
      }}>
        <Box
          sx={{
            width: '30%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#1d5592ff' : '#D9D9D9',
            margin: '50px 50px 0px 50px',
            borderRadius: '30px',
            boxShadow: '3px 10px 10px 4px rgba(0,0,0,0.25)',
            padding: ' 40px 32px'
          }}
        >
          <Typography variant='body2' sx={{ fontSize: 29, fontWeight: 700, m: '0 auto' }}>
            Quản lý tài khoản
          </Typography>
          <MenuItem icon={AccountCircleIcon} text="Information" onClick={() => { setSelectedTab(TABS.INFORMATION), navigate('/settings/information') }} />
          <MenuItem icon={NotificationsIcon} text="Notification" onClick={() => { setSelectedTab(TABS.NOTIFICATION), navigate('/settings/notification') }} />
          <MenuItem icon={SecurityIcon} text="Security" onClick={() => { setSelectedTab(TABS.SECURITY), navigate('/settings/security') }} />
          <MenuItem icon={HelpIcon} text="Help" onClick={() => { setSelectedTab(TABS.HELP), navigate('/settings/help') }} />
        </Box>
        <Box>
          {selectedTab === TABS.INFORMATION && <Information />}
          {selectedTab === TABS.NOTIFICATION && <NotificationTab />}
          {selectedTab === TABS.SECURITY && <div>Security Tab</div>}
          {selectedTab === TABS.HELP && <div>Help Tab</div>}
        </Box>

      </Box>
    </>
  )
}

export default Setting