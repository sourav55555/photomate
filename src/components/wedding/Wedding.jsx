import React from 'react';
import Button from '../button/Button';

const Wedding = () => {
    return (
        <div className='md:px-20 px-5'>
           <div className='flex items-center justify-between mb-8 md:mb-12'>
           <h3 className='text-3xl md:text-4xl font-semibold'>
                Wedding
            </h3>
            <Button text="Show More"/>
           </div>

           <div className='section-bg md:flex grid grid-cols-2 gap-3 py-8 justify-center '>
                <div className='h-full  md:w-[22%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img src=" /images/wedding/wed1.jpeg" className='w-full rounded-[50px] object-cover group-hover:scale-105 duration-300 transition-all ease-in' alt="wedding 1" />
                </div>
                <div className='h-full md:w-[15%] cursor-pointer group overflow-hidden rounded-[50px]'>
                    <img src=" /images/wedding/wed2.jpeg" className="w-full h-[15.6rem] rounded-[50px] object-cover group-hover:scale-105 duration-300 transition-all ease-in" alt="wedding 2" />
                </div>
                <div className='h-full cursor-pointer group overflow-hidden rounded-[50px] md:w-[23%]'>
                    <img src=" /images/wedding/sed3.jpeg" 
                    className="w-full h-[20rem] md:h-[27rem] rounded-[50px] object-cover group-hover:scale-105 duration-300 transition-all ease-in md:mt-9" alt="wedding 3" />
                </div>
                <div className='h-full cursor-pointer group overflow-hidden rounded-[50px] md:w-[23%]'>
                    <img src=" /images/wedding/wed4.jpeg" 
                    className=" w-full h-[20rem] md:h-[31rem] rounded-[50px] object-cover group-hover:scale-105 duration-300 transition-all ease-in md:mt-9"
                    alt="wedding 4" />
                </div>
                <div className='h-full cursor-pointer group overflow-hidden rounded-[50px] md:w-[15%]'>
                    <img src=" /images/wedding/wed5.jpeg" 
                    className="w-full h-[15.6rem] rounded-[50px] object-cover group-hover:scale-105 duration-300 transition-all ease-in md:mt-28"
                    alt="wedding 5" />
                </div>
           </div>
        </div>
    );
};

export default Wedding;

// h-[15.7rem] h-[21.9rem] h-[25rem] h-[15.6rem]