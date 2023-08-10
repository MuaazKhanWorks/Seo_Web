import { Box, Grid, Stack, Typography } from '@mui/material'
import threepic from '../../images/threepic.png'
import twopic from '../../images/twopic.png'
import './HeaderStyles.css'
import React from 'react'

const Footr = () => {
  return (
    <>
        <Box className='foot'>
            <Grid container sx={{marginTop:'30px',paddingTop:'30px'}} justifyContent={'space-around'}>
                
            <Grid item lg={2} >
            <Typography variant='h6'>Who We Are </Typography>
            <hr/>
            <ul>
                <li>Home is</li>
                <li>Contact us</li>
                <li>jnlsan</li>
            </ul>
            </Grid>
            <Grid item lg={2}>
            <Typography variant='h6'>Services </Typography>
            <hr/>
            <ul>
            <li>Home is</li>
                <li>Contact us</li>
                <li>jnlsan</li>
                <li>ABC</li>
                <li>DEF</li>
                <li>ABC</li>
            </ul>
            </Grid>
            <Grid item lg={2}>
            <Typography variant='h6'>Important Links </Typography>
            <hr/>
            <ul>
            <li>Home is</li>
                <li>Contact us</li>
                <li>jnlsan</li>
                <li>ABC</li>
                <li>DEF</li>
                <li>ABC</li>
            </ul>
            </Grid>
            <Grid item lg={2} >
            <Typography variant='h6'>Event and Release </Typography>
            <hr/>
            <ul>
            <li>Home is</li>
                <li>Contact us</li>
                <li>jnlsan</li>
            </ul>
            </Grid>
            </Grid>
            <Stack direction={'row'} justifyContent={'space-around'}>
            <img style={{height:'40px'}} src={threepic}/>
            <img style={{height:'50px'}} src={twopic}/>
            </Stack>
            <hr/>
            <Stack direction={'row'} justifyContent={'space-around'}>
            <Typography>@ 2023 Special Communication orginazation Powered By IT Branch <br/>SCO</Typography>
            <box>
                <Stack direction={'row'} spacing={2}>
            <Typography>Compliancs</Typography>
            <hr/>
            <Typography>Privacy Policy</Typography>
            <hr/>
            <Typography>Disclamer</Typography>
            </Stack>
            </box>
            </Stack>
        </Box>
    </>
  )
}

export default Footr
