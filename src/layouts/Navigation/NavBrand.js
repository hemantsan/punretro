import React from 'react';
import { Link } from 'react-router-dom';

const NavBrand = props => (
  <div className='navbar-brand'>
    <Link className='navbar-item' to='/home'>
      <strong> PunRetro</strong>
    </Link>

    <a href='/' role='button' className='navbar-burger burger'>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </a>
  </div>
);

export default NavBrand;
