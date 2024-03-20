import React from 'react'
import SideBar from './SideBar'

function Home() {
  return (
    <div>
    <div className="flex h-screen">
      <SideBar/>
    </div>
    <div>
      Home
    </div>
    </div>
  )
}

export default Home