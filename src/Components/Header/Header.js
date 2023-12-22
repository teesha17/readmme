import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div>HEADER PAGE</div>
      <div className='navbar'>
        <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
          <li>
          <Link to='/team'>Team</Link>
          </li>
          <li>
          <Link to='/about'>About us</Link>
          </li>
          <li>
          <Link to='/gallery'>Gallery</Link>
          </li>
          <li>
          <Link to='/contact'>Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
