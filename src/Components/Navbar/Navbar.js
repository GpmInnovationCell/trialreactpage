import React,{useState} from 'react'
import {SiDatabricks} from 'react-icons/si'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css'

import {Link} from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div name="top" className='navbar'>
        <div className="container">
            <div className="logo">
                <SiDatabricks className='icon' />
                <h1>DROP</h1>
            </div>

            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
              <li> <Link to='/'> Home</Link></li>
              <li><Link to='/service'> About Us</Link></li>
              <li><Link to='/recovery'> Services</Link></li>
              <li><Link to='/contact'>Portfolio</Link></li>
            </ul>
            <button className='n-button'>Let's Talk</button>

            <div className="hamburger iicon" onClick={handleNav}>
              {!nav ? (<FaBars className="iicon"/>) : (<FaTimes className='icon' />)}

            </div>
        </div>
    </div>
  )
}

export default Navbar
