import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-32 w-full flex justify-between items-center gap-[4.5rem] px-4 md:px-[5.5rem]'>
            <Link to="/">
                <img src=" /images/PhotoMate.com.png" className='md:w-80 ' alt="Photomate logo" />
            </Link>
            <div className='flex md:flex-row flex-col gap-2 md:gap-6 items-center'>
                <Link
                    to="/register"
                    className='bg-primary py-1 md:py-3 px-3 md:px-6 rounded-full transition-all duration-300 ease-out font-semibold border-2 border-black  text-white hover:border-primary hover:bg-transparent hover:text-primary'
                >
                    Register
                </Link>

                <Link
                    to="/login"
                    className='bg-primary py-1 md:py-3 px-3 md:px-6 rounded-full transition-all duration-300 ease-out font-semibold border-2 border-black  text-white hover:border-primary hover:bg-transparent hover:text-primary'
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;