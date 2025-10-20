import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 text-center py-5">
            <img className="w-[250px]" src={logo} alt="logo" />
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet</p>
            <p className="font-semibold text-accent text-lg">
                {format(new Date(), 'EEEE, MMMM d, yyyy')}
            </p>
        </div>
    );
};

export default Header;
