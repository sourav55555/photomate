import React from 'react';

const HeroSection = () => {
    return (
        <div className='mt-7 px-4 ms:px-12'>
            <div className='h-[47rem] w-full relative'>
                <img src=" /images/Banner Image.png" className='w-full object-cover md:object-fill h-full rounded-[35px]' alt="banner image" />
                <div className='absolute left-4 md:left-10 bottom-36 md:bottom-28'>
                    <h1 className=' text-3xl md:text-5xl font-semibold text-white leading-tight'>
                        Transforming <br />
                        How You Connect with <br className='hidden md:inline' />
                        Professional Photographers
                    </h1>
                </div>
            </div>
            <div className='md:h-36 bg-primary md:px-11 px-3 py-5 md:py-9 w-[97%] md:w-[94%] mx-auto rounded-3xl -mt-14 relative z-20'>
                <form action="" className="grid grid-cols-2 md:flex justify-between gap-2 items-center h-full ">
                    {/* Location Select */}
                    <div className='w-fit h-fit relative'>
                        <select
                            name="location"
                            id="location"
                            className="px-3 py-[10px] appearance-none md:w-[14rem] bg-white/70 text-black md:text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 font-[500] cursor-pointer"
                        >
                            <option value="" disabled selected hidden>Location</option>
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                        </select>

                        <img src=" /images/icons/Vector (1).png" className='w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2' alt="location" />

                    </div>


                    {/* Date Input with Label */}
                    <div className="relative md:w-64">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            className="p-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl opacity-5 px-3 py-[10px]"
                        />
                        <label
                            htmlFor="date"
                            className="absolute left-0 top-0 rounded-2xl text-black pointer-events-none transition-all duration-300 ease-in-out bg-white/70 w-full h-full flex items-center justify-between px-3 py-[10px] font-[500] md:text-lg"
                        >
                            Event Date
                            <img src=" /images/icons/Vector calender.png" className='h-5 w-5' alt="calender" />
                        </label>
                    </div>

                    {/* Event Type Select */}
                    <div className='relative bg-white/70 rounded-2xl'>
                        <select
                            name="type"
                            id="type"
                            className="px-3 py-[10px] appearance-none md:w-[14rem] bg-transparent text-black md:text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 font-[500] cursor-pointer"
                        >
                            <option value="" disabled selected hidden>Select Type</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                        </select>
                        <img src=" /images/icons/Vector down.png" className='w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2' alt="type" />

                    </div>

                    {/* Time Input with Label */}
                    <div className="relative md:w-64">
                        <input
                            type="time"
                            name="time"
                            id="time"
                            className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-5"
                        />
                         <label
                            htmlFor="time"
                            className="absolute left-0 top-0 rounded-2xl text-black pointer-events-none transition-all duration-300 ease-in-out bg-white/70 w-full h-full flex items-center justify-between px-3 py-[10px] font-[500] md:text-lg"
                        >
                            Event Time
                            <img src=" /images/icons/Group 5.png" className='h-5 w-5' alt="calender" />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="text-white shadow-md shadow-slate-600 rounded-2xl px-5 py-3 w-fit bg-white">
                        <img src=" /images/icons/Vector search.png" className='size-5 md:size-8' alt="search" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HeroSection;