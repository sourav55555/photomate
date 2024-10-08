import React from 'react';
import Button from '../button/Button';

const Birthday = () => {
    return (
        <div className='md:px-20 px-5 mt-20 md:mt-32'>
            <div className='flex items-center justify-between mb-12'>
                <h3 className='text-4xl font-semibold'>
                    Birthday
                </h3>
                <Button text="Show More" />
            </div>

            <div className='md:flex grid grid-cols-2 items-center gap-3 py-8 justify-center section-bg'>
                <div className='md:w-[15%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img src=" /images/birthday/b1.jpeg"
                        className='w-full group-hover:scale-105 duration-300 transition-all ease-in rounded-[50px] object-cover h-[15.6rem]'
                        alt="birthday 1" />
                </div>
                <div className='md:w-[23%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img src=" /images/birthday/b2.jpeg"
                        className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[16.5rem] md:h-[21rem] rounded-[50px] object-cover'
                        alt="birthday 2" />
                </div>
                <div className='md:w-[22%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img src=" /images/birthday/b3.jpeg" className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[20rem] md:h-[31rem] rounded-[50px] object-cover' alt="" />
                </div>
                <div className='md:w-[23%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img src=" /images/birthday/fb4.jpeg"
                        className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[21rem] rounded-[50px] object-cover'
                        alt="birthday 7" />
                </div>
                <div className='md:w-[15%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img src=" /images/birthday/b5.jpeg"
                        className='w-full group-hover:scale-105 duration-300 transition-all ease-in h-[15.6rem] rounded-[50px] object-cover'
                        alt="birthday 8" />
                </div>
            </div>

        </div>
    );
};

export default Birthday;