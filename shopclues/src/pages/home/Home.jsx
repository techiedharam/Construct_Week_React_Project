import React from 'react'

// Local imports 
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import './Home.css'

// Local imports 

const Home = () => {
  return (
   <div className="home">
        <div className='home-container'>
            <LeftSidebar/>
            <RightSidebar/>
        </div>
   </div>
    
  )
}

export default Home
