import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton,Typography, useTheme} from "@mui/material";
import {Link} from 'react-router-dom';
import {tokens} from '../../theme'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlinedOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"



const Sidebar = () => {
  const theme=useTheme();
const colors =tokens(theme.palette.mode)
const[isCollapsed,setIsCollapsed]= useState(false);
const[selected,SetSelected] =useState('DashBoard');
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar