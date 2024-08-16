import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-32 w-full flex justify-between items-center px-[5.5rem]'>
            <Link to="/">
                <img src="/public/images/PhotoMate.com.png" className='w-80 ' alt="Photomate logo" />
            </Link>
            <div className='flex gap-6 items-center'>
                <Link
                    to="/register"
                    className='bg-primary py-3 px-6 rounded-full transition-all duration-300 ease-out font-semibold border-2 border-black  text-white hover:border-primary hover:bg-transparent hover:text-primary'
                >
                    Register
                </Link>

                <Link
                    to="/login"
                    className='bg-primary py-3 px-6 rounded-full transition-all duration-300 ease-out font-semibold border-2 border-black  text-white hover:border-primary hover:bg-transparent hover:text-primary'
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;