import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { lazy, Suspense, useState } from 'react'
import { orange } from '../../constants/color'
import {Logout as LogoutIcon,Add as AddIcon, Group as GroupIcon, Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'

const SearchDialog = lazy(() => import("../specific/Search"))
const NotificationDialog = lazy(() => import("../specific/Notifications"))
const NewGroupDialog = lazy(() => import("../specific/NewGroup"))

const Header = () => {

  const navigate = useNavigate()
  const [isMobile,setIsMobile] = useState(false)
  const [isSearch,setIsSearch] = useState(false)
  const [isNewgroup,setIsNewGroup] = useState(false)
  const [isNotification,setIsNotification] = useState(false)

  const handleMobile = () => {
    setIsMobile(prev => !prev)
  }

  const openSearch = () => {
    setIsSearch(prev => !prev)
  }

  const openNewGroup = () => {
    setIsNewGroup(prev => !prev)
  }

  const openNotification = () => {
    setIsNotification(prev => !prev)
  }

  const navigateToGroup = () => navigate("/group")

  const logoutHandler = () => {}

  return (
    <>
    <Box sx = {{flexGrow:1}} height = {"4rem"} marginBottom={"calc(0.5rem + 1px)"}>
      <AppBar position="static" sx = {{
        bgcolor:orange
      }}>
        <Toolbar>
          <Typography 
          variant='h6'
          sx={{
            display:{xs:"none",sm:"block"},
          }}>
            Chat App
          </Typography>
          <Box sx = {{
            display:{ xs:"block", sm:"none"},
          }}>
            <IconButton size="large" color="inherit" onClick={handleMobile}>
              <MenuIcon/>
            </IconButton>
          </Box>
          <Box sx={{
            flexGrow:1,
          }}/>
          <Box>
            <IconBtn title={"Search"} icon={<SearchIcon/>} onClick={openSearch}/>
            <IconBtn title={"Add Group"} icon={<AddIcon/>} onClick={openNewGroup}/>
            <IconBtn title={"Groups"} icon={<GroupIcon/>} onClick={navigateToGroup}/>
            <IconBtn title={"Notifications"} icon={<NotificationsIcon/>} onClick={openNotification}/>
            <IconBtn title={"Logout"} icon={<LogoutIcon/>} onClick={logoutHandler}/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    {
      isSearch && <Suspense fallback={<Backdrop open/>}>
        <SearchDialog/>
      </Suspense>
    }
    {
      isNotification && <Suspense fallback={<Backdrop open/>}>
        <NotificationDialog/>
      </Suspense>
    }
    {
      isNewgroup && <Suspense fallback={<Backdrop open/>}>
        <NewGroupDialog/>
      </Suspense>
    }
    </>
  )
}

const IconBtn = ({title,icon,onClick}) => {
  return (
    <Tooltip title={title}>
      <IconButton size="large" color='inherit' onClick={onClick}>
        {icon}
      </IconButton>
     </Tooltip>
  )
}

export default Header