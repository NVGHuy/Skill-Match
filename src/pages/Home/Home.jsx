import React from 'react'
import AppBar from '~/components/AppBar/AppBar.jsx'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import imgHome from '~/assets/imgHome.png'
import CardsMentor from '~/pages/CardsMentor/CardsMentor.jsx'
function Home() {
  const handleClick = () => {
    console.log('You clicked the Chip.')
  }
  const title = ['Programming', 'Design', 'Marketing', 'Business']
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <Box px={10} py={2} sx={{ overflowX: 'auto', whiteSpace: { xs: 'normal', md: 'nowrap' }, height: (theme) => theme.trello.contentHeight }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, width: '100%' }}>
          <Box sx={{ width: { xs: '100%', md: '45%' }, gap: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant='inherit' sx={{
              fontFamily: 'Spline Sans, sans-serif',
              fontWeight: 700,
              fontSize: 70,
              // maxWidth: '100%'
            }} >Find your <div /> perfect mentor</Typography>
            <TextField id="outlined-basic" label="Enter skill or topic" variant="outlined"
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '100px' // target phần input và viền
                }
              }}
            />
            <Stack direction="row" spacing={2.6} divider={<Divider orientation="vertical" flexItem
            />} sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center'
            }}>
              {title.map((item, index) => (
                <Chip key={index} label={item} onClick={handleClick}
                  sx={{
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'white' : '#95F6F6 ',
                    ':hover': {
                      bgcolor: (theme) => theme.palette.mode === 'dark' ? '#E0E0E0' : '#ADE8E8 ',
                    },
                    color: 'black'
                  }}
                />
              ))}
            </Stack>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '55%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box src={imgHome} alt="Logo" component='img'
              sx={{
                width: '100%',
                maxWidth: 560,
                objectFit: 'contain',
                mixBlendMode: (theme) => theme.palette.mode === 'light' ? 'multiply' : 'normal'
              }}
            />
          </Box>
        </Box>
        <Box pt={3.5} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant='body2' sx={{
            fontFamily: 'Noto Sans, sans-serif',
            fontWeight: 700,
            fontSize: 35
          }}
          >Top-rated mentors</Typography>
          <Grid container columnSpacing={15} rowSpacing={4} >
            <Grid xs={12} sm={6} md={4} sx={{ ':hover': { } }}>
              <CardsMentor />
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <CardsMentor />
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <CardsMentor />
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <CardsMentor />
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <CardsMentor />
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  )
}

export default Home