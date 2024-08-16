import React from 'react';

const HeroSection = () => {
    return (
        <div className='mt-7 px-12'>
            <div className='h-[47rem] w-full relative'>
                <img src="/public/images/Banner Image.png" className='w-full object-fill h-full rounded-[35px]' alt="banner image" />
                <div className='absolute left-10 bottom-28'>
                    <h1 className='text-5xl font-semibold text-white leading-tight'>
                        Transforming <br />
                        How You Connect with <br />
                        Professional Photographers
                    </h1>
                </div>
            </div>
            <div className='h-36 bg-primary px-11 py-9 w-[94%] mx-auto rounded-3xl -mt-14 relative z-20'>
                <form action="" className="flex justify-between items-center h-full space-x-4">
                    {/* Location Select */}
                    <div className='w-fit h-fit relative'>
                        <select
                            name="location"
                            id="location"
                            className="px-3 py-[10px] appearance-none w-[14rem] bg-white/70 text-black text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 font-[500] cursor-pointer"
                        >
                            <option value="" disabled selected hidden>Location</option>
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                        </select>

                        <img src="/public/images/icons/Vector (1).png" className='w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2' alt="location" />

                    </div>


                    {/* Date Input with Label */}
                    <div className="relative w-64">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            className="p-2 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl opacity-5 px-3 py-[10px]"
                        />
                        <label
                            htmlFor="date"
                            className="absolute left-0 top-0 rounded-2xl text-black pointer-events-none transition-all duration-300 ease-in-out bg-white/70 w-full h-full flex items-center justify-between px-3 py-[10px] font-[500] text-lg"
                        >
                            Event Date
                            <img src="/public/images/icons/Vector calender.png" className='h-5 w-5' alt="calender" />
                        </label>
                    </div>

                    {/* Event Type Select */}
                    <div className='relative'>
                        <select
                            name="type"
                            id="type"
                            className="px-3 py-[10px] appearance-none w-[14rem] bg-white/70 text-black text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 font-[500] cursor-pointer"
                        >
                            <option value="" disabled selected hidden>Select Type</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                        </select>
                        <img src="/public/images/icons/Vector down.png" className='w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2' alt="type" />

                    </div>

                    {/* Time Input with Label */}
                    <div className="relative w-64">
                        <input
                            type="time"
                            name="time"
                            id="time"
                            className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-5"
                        />
                         <label
                            htmlFor="time"
                            className="absolute left-0 top-0 rounded-2xl text-black pointer-events-none transition-all duration-300 ease-in-out bg-white/70 w-full h-full flex items-center justify-between px-3 py-[10px] font-[500] text-lg"
                        >
                            Event Time
                            <img src="/public/images/icons/Group 5.png" className='h-5 w-5' alt="calender" />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="text-white shadow-md shadow-slate-600 rounded-2xl px-5 py-4 bg-white">
                        <img src="/public/images/icons/Vector search.png" className='size-8' alt="search" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HeroSection;