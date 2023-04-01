import React from 'react'
import {Box, IconButton, useTheme, InputBase} from '@mui/material';
// import InputBase from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {useContext} from 'react'
import {ColorModeContext, tokens} from '../../theme'

const TopBar = () => {
  const Theme = useTheme();
  const colors = tokens(Theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box 
        display="flex" 
        backgroundColor={colors.primary[400]} 
        borderRaduse="3px"
      >
        <InputBase sx={{ml:2, flex:1}} placeholder="search"/>

        <IconButton type='buttom' sx={{p:1}}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex" flexDirection="row">
        <IconButton onClick={colorMode.toggleColorMode}>
          {
            Theme.palette.mode === 'dark'?
            (
              <DarkModeOutlinedIcon/>
            )
            :
            (
              <LightModeOutlinedIcon/>
            )
          }
        </IconButton>

        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar
 