import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import MenuIcon from "@mui/icons-material/Menu";
import './Topnav.css'
import Drop from "./Drop";
const Topnav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {/* <img src={Logo} alt="logo" height={"70"} width="200" /> */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
      <li style={{color:'gold'}}>Brand Ambositer</li>
        <li>About Us</li>
        <li>Explore With SEO</li>
        <li>Events</li>
        <li>Value Added Services</li>
        <li>Supporters</li>
        <li>Customer Portal</li>
        <Stack direction={'row'} spacing={2}>
              <FacebookIcon/>
              <TwitterIcon/>
              <InstagramIcon/>
              <YouTubeIcon/>
              <SearchIcon/>
      </Stack>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "green" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}>

            </Typography>
            <Box sx={{ display: { xs: "none", sm: "green" } }}>
              <ul className="navigation-menu" >
              <li style={{color:'gold'}}>Brand Ambositer</li>
              <hr style={{height:'3vh'}}/>
              <li><Drop/></li>
              <li>Explore With SEO</li>
              <li style={{display:'flex',alignItems:'center'}}>Events <ArrowDropDownIcon/></li>
              <li>Value Added Services</li>
              <li>Supporters</li>
              <li>Customer Portal</li>
              <Stack direction={'row'} spacing={1.2}>
              <FacebookIcon/>
              <TwitterIcon/>
              <InstagramIcon/>
              <YouTubeIcon/>
              <SearchIcon/>
              </Stack>
              </ul>
              
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Topnav;
