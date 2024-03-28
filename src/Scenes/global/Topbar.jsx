import React ,{ useContext } from 'react'
import{ Box ,IconButton , useTheme} from "@mui/material"
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationOutlinedIcon from "@mui/icons-material/NotificationAddOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import SearchIcon from "@mui/icons-material/Search"


const Topbar = () => {
  const theme = useTheme();
  const colors =tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display={'flex'} justifyContent={'space-between'} p={"2"}>
      {/* search box */}
      <Box
       display={'flex'} 
      bgcolor={colors.primary[400]}
      borderRadius={"3px"}>
        <InputBase sx={{ml:2 , flex: 1}} placeHolder="search"/>
        <IconButton type='button' sx={{p:1}}> 
          <SearchIcon/>
        </IconButton>

      </Box>
      <Box display={"flex"}>
        <IconButton onClick={colorMode.toggleColorMode}> 
        {theme.palette.mode ==="dark" ? (
          <DarkOutlinedIcon/>
        ):(<LightModeOutlinedIcon/>)}
        </IconButton>
        
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>
        
        <IconButton>
        <NotificationOutlinedIcon/>
        </IconButton>

        <IconButton>
        <SettingsOutlinedIcon/>
        </IconButton>

      </Box>
  
    </Box>
  )
}

export default Topbar