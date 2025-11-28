import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
      <nav className="flex justify-between mt-5 mx-2">
        <div className='text-2xl font-bold'>My recipe blog</div>
        <div>
          <ul className="flex justify-between gap-2 text-2xl font-bold">
            <NavLink to={'/'} className='hover:bg-amber-600 hover:text-white rounded-lg p-1 cursor-pointer'>Home</NavLink>
            <NavLink to={`recipes`} className='hover:bg-amber-600 hover:text-white rounded-lg p-1 cursor-pointer'>Recipe</NavLink>
            <NavLink to={'aboutus'} className='hover:bg-amber-600 hover:text-white rounded-lg p-1 cursor-pointer'>About Us</NavLink>
           
          </ul>
        </div>
        <div className='text-xl'>Sign in</div>
      </nav>
    );
};

export default NavBar;