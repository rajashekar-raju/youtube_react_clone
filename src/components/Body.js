import React from 'react'
import SideBar from './SideBar'
// import Buttons from './Buttons'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className="grid grid-flow-col scroll_bar">
        <SideBar/>
        <Outlet/>  
    </div>
  )
}

export default Body