import React from 'react';
import { Link as NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-900 text-white text-lg font-medium'>
            <ul className='flex justify-end items-center mr-10 gap-6 h-14'>
                <li className='hover:text-orange-600 mr-5'>
                        <NavLink
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className='hover:text-orange-600 mr-5'>
                        <NavLink
                            to="/order">
                            Order Review
                        </NavLink>
                    </li>
                    <li className='hover:text-orange-600 mr-5'>
                        <NavLink
                            to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className='hover:text-orange-600 mr-5'>
                        <NavLink
                            to="/contact">
                            Contact Us
                        </NavLink>
                    </li>
            </ul>
        </nav>
    );
};

export default Header;