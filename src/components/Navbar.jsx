import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../lib/img/logo.png';

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <div className='inner-content'>
          <div className='brand'>
            <Link to='/'>
              <img className='logo' src={logo} alt='logo' />
              ToDo MovieList
            </Link>
          </div>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Watch List</Link>
            </li>

            <li>
              <Link to='/watched'>Watched</Link>
            </li>

            <li>
              <Link to='/add' className='btn btn-main'>
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
