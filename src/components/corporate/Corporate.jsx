import React from 'react';
import Button from '../button/Button';

const Corporate = () => {
    return (
        <div className='px-5 md:px-20 mt-20 md:mt-32'>
            <div className='flex items-center justify-between mb-12'>
                <h3 className='text-4xl font-semibold'>
                    Corporate
                </h3>
                <Button text="Show More" />
            </div>
            <div className='md:flex grid-cols-2 grid items-center justify-center gap-3 section-bg py-8'>
                <div className='md:w-[22%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[20rem] md:h-[31rem] rounded-[50px] object-cover' src=" /images/corporate/corporate1.jpeg" alt="corporate 1" />
                </div>
                <div className='md:w-[23%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[18.5rem] md:h-[28rem] rounded-[50px] object-cover' src=" /images/corporate/corporate2.jpeg" alt="corporate 2" />
                </div>
                <div className='md:w-[24%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[17rem] md:h-[25rem] rounded-[50px] object-cover' src=" /images/corporate/corporate3.jpeg" alt="corporate 3" />
                </div>
                <div className='md:w-[15%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[15.6rem] rounded-[50px] object-cover' src=" /images/corporate/corporate4.jpeg" alt="corporate 4" />
                </div>
                <div className='md:w-[15%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[15.6rem] rounded-[50px] object-cover' src=" /images/corporate/corporate5.jpeg" alt="corporate 5" />
                </div>
            </div>
        </div>
    );
};

export default Corporate;