import React from 'react'
import Api from './Api'
import ResponsiveDrawer from './Navbar'

export default function Home() {
  return (
    <>
    <div style={{minHeight:"100vh", background: "#151515"}}>
        <Api/>
        <ResponsiveDrawer/>
    </div>
    </>
  )
}
