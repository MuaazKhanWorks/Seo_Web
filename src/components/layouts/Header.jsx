import React from 'react'
import './HeaderStyles.css'
import logo from '../../images/logo.png'
import mainimg from '../../images/mainimg.png'
import { NavLink } from 'react-router-dom'
import { Box, Button, Paper } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <>
    <Box>
      <Paper elevation={10} style={{height:'60px'}} className='mains'>
        <img src={logo} style={{height:'50px'}} />
        <NavLink to={"/Mobile"} style={{display:'flex',textDecoration:'none',alignItems:'center'}}><ArrowDropDownIcon/>Mobile</NavLink>
        
        <NavLink to={"/Phone"} style={{display:'flex',textDecoration:'none',alignItems:'center'}}><ArrowDropDownIcon/>Phone</NavLink>
      
        <NavLink  to={"/Internet"} style={{display:'flex',textDecoration:'none',alignItems:'center'}}><ArrowDropDownIcon/> Internet </NavLink>
      
        <NavLink to={"/SPaisa"} style={{display:'flex',textDecoration:'none',alignItems:'center'}}><ArrowDropDownIcon/>SPaisa</NavLink>
     
        <NavLink to={"/contact"} style={{display:'flex',textDecoration:'none',alignItems:'center'}}><ArrowDropDownIcon/>Contact</NavLink>
      
        <NavLink to={"/Alerts"} style={{display:'flex',textDecoration:'none',alignItems:'center'}}><ArrowDropDownIcon/>Alerts</NavLink>
        <Button variant='contained' sx={{borderRadius:'20px'}}><LanguageIcon/> Online Payment</Button>
        </Paper>
      </Box>
      <img src={mainimg} style={{width:'100%'}}/>
    </>
  )
}

export default Header
