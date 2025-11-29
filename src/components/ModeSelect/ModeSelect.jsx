import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { Box } from '@mui/material'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="labe-select-dark-light-mode"
        sx={{
          color:(theme) => theme.palette.mode === 'dark' ? 'white' : '#405FBD',
          '&.Mui-focused': {
            color: (theme) => theme.palette.mode === 'dark' ? 'white' : '#405FBD'
          }
        }}
      >Mode</InputLabel>
      <Select
        labelId="select-dark-light-mode"
        id="demo-select-small"
        value={mode || 'system'}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: (theme) => theme.palette.mode === 'dark' ? 'white' : '#405FBD',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: (theme) => theme.palette.mode === 'dark' ? 'white' : '#405FBD'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: (theme) => theme.palette.mode === 'dark' ? 'white' : '#405FBD'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: (theme) => theme.palette.mode === 'dark' ? 'white' : '#405FBD'
          },
          '.MuiSvgIcon-root':{
            color: (theme) => theme.palette.mode === 'dark' ? 'white' : '#405FBD'
          }
        }}
      >
        <MenuItem value='light'>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon fontSize='small' />
            Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small' />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect