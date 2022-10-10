import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowPathIcon } from '@heroicons/react/24/solid'

import './Header.css';

const Header = () => {
    return (
        <div className='flex px-12 py-5 bg-gray-600 justify-between'>
            <div className="logo">
                <a className='text-white text-2xl font-bold flex' href='/'>
                    <ArrowPathIcon className='h-8 w-8 mr-1 pt-1'></ArrowPathIcon>
                    HighEdu
                </a>
            </div>
            <div className='text-right'>
                <nav className=''>
                    <ul>
                        <li><NavLink className={ ({ isActive }) => isActive ? 'text-red-600' : undefined} to='/home'>Home</NavLink></li>
                        <li><NavLink className={ ({ isActive }) => isActive ? 'text-red-600' : undefined} to='/course'>Course</NavLink></li>
                        <li><NavLink className={ ({ isActive }) => isActive ? 'text-red-600' : undefined} to='/about'>About</NavLink></li>
                        <li><NavLink className={ ({ isActive }) => isActive ? 'text-red-600' : undefined} to='/blog'>Blog</NavLink></li>
                        <li><NavLink className={ ({ isActive }) => isActive ? 'text-red-600' : undefined} to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;