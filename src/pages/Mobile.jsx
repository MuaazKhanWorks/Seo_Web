import React from 'react'
import Header from '../components/layouts/Header'
import Others from './Others'
import Footr from '../components/layouts/Footr'
import Topnav from '../layouts/Topnav'


const Mobile = () => {
  return (
    <div>
      <Topnav/>
      <Header/>
      <Others/>
      <br/><br/>
      <Footr/>
      
    </div>
  )
}

export default Mobile
