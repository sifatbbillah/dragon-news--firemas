import React from 'react';
import { NavLink } from 'react-router-dom'; // use 'react-router-dom' not 'react-router'
import user from '../assets/user.png'; 

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-11/12 mx-auto py-4">
            
            {/* Empty left section (you can add logo later if needed) */}
            <div></div>
            
            {/* Center nav links */}
            <div className="flex gap-8 text-accent font-medium text-lg">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "text-primary underline" : ""}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "text-primary underline" : ""}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/career" 
                    className={({ isActive }) => isActive ? "text-primary underline" : ""}
                >
                    Career
                </NavLink>
            </div>

            {/* Right side: user icon + login button */}
            <div className="flex items-center gap-3">
                <img src={user} alt="user" className="w-8 h-8 rounded-full" />
                <button className="btn btn-primary">Login</button>
            </div>

        </nav>
    );
};

export default Navbar;
