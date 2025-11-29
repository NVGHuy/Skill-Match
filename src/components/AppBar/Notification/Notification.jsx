import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

function Notification() {
  return (
    <div>
      <Tooltip title="Notifications">
        <Badge
          color="warning"
          // variant="none"
          variant="dot"
          // variant={newNotification ? 'dot' : 'none'}
          sx={{ cursor: 'pointer' }}
          id="basic-button-open-notification"
          aria-controls={open ? 'basic-notification-drop-down' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        // onClick={handleClickNotificationIcon}
        >
          <CircleNotificationsIcon sx={{
            fontSize: 40,
            cursor: 'pointer',
            color: (theme) => theme.palette.mode === 'dark' ? 'white' : '#405FBD'
          }} />
        </Badge>
      </Tooltip>
    </div>
  )
}

export default Notification