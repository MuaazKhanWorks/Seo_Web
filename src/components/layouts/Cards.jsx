// import { Box, Button, Paper, Stack, Typography } from '@mui/material'
// // import api from '../../jsnnn'
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import React, { useEffect, useState } from 'react'

// const Cards = () => {
//     const [users,setUsers] = useState([])
    
//     const getUsers = async ()=>{
//         const response = await fetch('http://118.107.140.70:3010/api/packages/mobile-packages')
//         const data = await response.json();
//         setUsers(data.data)
//     }

//     useEffect(()=>{
//         getUsers();
//     },[])
//     return (
//         <>
        
//         {users.map((curElem)=>{
//           return(
//             <div key={curElem.id}>
                
//                 <Box>
//                 <Stack direction={'row'} spacing={3}>
//                 <Paper style={{width:'30%', height:'50vh',padding:'10px'}} elevation={10}>
//                     <Stack direction={'column'}>
//                     <Typography variant='body2'>{curElem.title}</Typography>
//                     <Typography variant='h6'>{curElem.package_basis}</Typography>
//                     <Stack direction={'row'} justifyContent={'space-around'} >
//                         <Stack direction={'column'}>
//                         <MailOutlineIcon fontSize='large' sx={{marginTop:'40px'}}/>
//                         <Typography variant='body1'>{curElem.sms_count}</Typography>
//                         <Typography variant='body2'>{curElem.validity}</Typography>
//                         </Stack>
//                         <Stack direction={'column'}>
//                         <AccessTimeIcon fontSize='large' sx={{marginTop:'40px'}}/>
//                         <Typography variant='body1'style={{marginLeft:'8px'}}>07</Typography>
//                         <Typography variant='body2'>Validity</Typography>
//                         </Stack>
//                     </Stack>
//                     <Box>
//                     <Stack direction={'row'} sx={{marginTop:'50px',color:'green'}} justifyContent={'space-around'}>
//                         <Box>
//                         <Typography variant='body2'>Rs {curElem.package_price}/{curElem.package_basis}</Typography>
//                         <Typography variant='body1'>Consumer Price</Typography>
//                         </Box>
                        
//                         <Button variant='contained' sx={{borderRadius:'15px'}} color='success'>View Details</Button>
//                     </Stack>
//                     </Box>
//                     </Stack>
//                 </Paper>
//                 </Stack>
//             </Box>

//             </div>
//           )})}
//         <br/><br/>
            
//         </>
//     )
// }

// export default Cards
