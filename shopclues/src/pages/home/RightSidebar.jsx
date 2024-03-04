import React from 'react'



// imgage imports 
import sideImg1 from '../../assets/sideImg1.jpg'
import sideImg2 from '../../assets/sideImg2.jpg'
import sideImg3 from '../../assets/sideImg3.jpg'

const RightSidebar = () => {
  return (
    <div className='right-sidebar' >
      <div className="side-box">
        <img src={sideImg1} alt="" />
        <p>Refurb Store</p>
        <h4>Shop Now</h4>
      </div>
      <div className="side-box">
        <img src={sideImg2} alt="" />
        <p>Refurb Store</p>
        <h4>Shop Now</h4>
      </div>
      <div className="side-box">
        <img src={sideImg3} alt="" />
        <p>Refurb Store</p>
        <h4>Shop Now</h4>
      </div>
    </div>
  )
}

export default RightSidebar
