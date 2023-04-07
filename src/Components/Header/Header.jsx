import React from 'react';
import { Link as NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-900 text-white font-medium'>
            <ul className='flex justify-end items-center mr-10 gap-6 h-14'>
                <li className='hover:text-orange-600 mr-5'>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li className='hover:text-orange-600 mr-5'>
                        <NavLink
                            to="/order"
                            className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                            Order Review
                        </NavLink>
                    </li>
                    <li className='hover:text-orange-600 mr-5'>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                            About
                        </NavLink>
                    </li>
                    <li className='hover:text-orange-600 mr-5'>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                            Contact Us
                        </NavLink>
                    </li>
            </ul>
        </nav>
    );
};

export default Header;