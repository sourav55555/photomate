import React from 'react';

const Button = ({text}) => {
    return (
        <button className='bg-primary py-3 px-6 rounded-full transition-all duration-300 ease-out font-semibold border-2 border-black  text-white hover:border-primary hover:bg-transparent hover:text-primary'>{text}</button>
    );
};

export default Button;