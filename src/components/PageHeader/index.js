import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = props => (
  <div className='columns'>
    <div className='column'>
      <h1 className='title'>{props.heading}</h1>
      <nav className='breadcrumb' aria-label='breadcrumbs'>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li className='is-active'>
            <Link to={`/${props.link}`} aria-current='page'>
              {props.currentPage}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default PageHeader;
