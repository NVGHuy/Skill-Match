import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
function CardsMentor() {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: 350,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        transform: 'none',
        transformOrigin: 'center',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Avatar sx={{ width: 85, height: 85 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant='span' sx={{ fontSize: 18, fontWeight: 700 }}>Nguyễn Văn Gia Huy</Typography>
          <Typography>Programming</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
            <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} /> 4.9 (200 reviews)
          </Typography>
        </CardContent>
      </Box>
      <Button variant="outlined" color="primary" sx={{
        display: 'block',
        margin: 'auto ',
        border: '2px solid', // giữ layout cố định
        mb: 2,
        ':hover': {
          color: 'rgba(4, 87, 169, 1)'
        }
      }} >Profile</Button>
    </Card>
  )
}

export default CardsMentor