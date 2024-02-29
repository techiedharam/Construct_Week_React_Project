import React from 'react'

// font awesome icons imports 
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// local impots 
import "../navbar/Navbar.css"
import logoImage from '../../assets/logo.svg'
import madeinindia from '../../assets/madeinindia.png'


const Navbar = () => {
  return (
    <div className='navbar' >
      <div className="nav-container">
            <div className="logo">
                <img src={logoImage} alt="" />
            </div>
            <div className="search-bar">
                <form>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                    <input type="text" placeholder='What is on your mind today?' />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className="sign-bar">
                <ul>
                    <li>Share <br/> <span style={{color:"#24a3b5"}} > location</span> </li>
                    <li><FontAwesomeIcon icon={faBell} /></li>
                    <li><FontAwesomeIcon icon={faHeart} /></li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                    <li>Sign In</li>
                </ul>
            </div>
      </div>
      <div className='nav-menu'>
        <ul>
            <li><a href="#"><img src={madeinindia} alt="" /></a></li>
            <li><a href="#">MOBILES & MORE</a></li>
            <li><a href="#">MEN</a></li>
            <li><a href="#">WOMEN</a></li>
            <li><a href="#">HOME & KITCHEN</a></li>
            <li><a href="#">APPLIANCE</a></li>
            <li><a href="#">SPORTS & MORE</a></li>
            <li><a href="#">ESSENTIALS</a></li>
            <li><a href="#">GLOBAL SHOPPING</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
