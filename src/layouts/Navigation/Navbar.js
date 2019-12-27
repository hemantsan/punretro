import React from 'react';
import NavBrand from './NavBrand';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='container'>
      <NavBrand />

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
            <Link to='/home' className='navbar-item'>
              Home
            </Link>
            <Link to='/about' className='navbar-item'>
              About
            </Link>
            <Link to='/price' className='navbar-item'>
              Pricing
            </Link>
            <Link to='/dashboard' className='navbar-item'>
              Dashboard
            </Link>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <Link to='/sign-up' className='button is-primary'>
                <strong>Sign up</strong>
              </Link>
            </div>
          </div>
          <Link to='/login' className='navbar-item'>
            Login
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
