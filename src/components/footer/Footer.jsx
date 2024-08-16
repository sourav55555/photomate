import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-[7.25rem] flex justify-between px-28 pb-28'>
            <div className='w-[35%]'>
                <h4 className='text-[3.125rem] font-semibold mb-10'>GET IN TOUCH</h4>
                <p className='text-lg mb-10'>Feel free to reach out if you want to collaborate with
                    us, or simply have a chat</p>
                <div className='mb-10'>
                    <ul className='flex items-center gap-8'>
                        <li>
                            <FaLinkedin size={20} />
                        </li>
                        <li>
                            <AiOutlineInstagram size={20} />
                        </li>
                        <li>
                            <BsTwitterX size={20} />
                        </li>
                        <li>
                            <FaFacebook size={20} />
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='flex items-center gap-7'>
                        <div className='w-12 h-12 bg-[#1E1E20] rounded flex items-center justify-center'>
                            <FaPhoneAlt size={20} />
                        </div>
                        <div>
                            <p className='text-lg'>+1800 123 456</p>
                            <p className='text-sm text-white/60'>Help phone support</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-7 mt-5'>
                        <div className='w-12 h-12 bg-[#1E1E20] rounded flex items-center justify-center'>
                            <IoMail size={20} />
                        </div>
                        <div>
                            <p className='text-lg'>Support@photomate.com</p>
                            <p className='text-sm text-white/60'>Help email support</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-7 mt-5'>
                        <div className='w-12 h-12 bg-[#1E1E20] rounded flex items-center justify-center'>
                            <HiOutlineLocationMarker size={20} />
                        </div>
                        <div>
                            <p className='text-lg'>5th Avenue, Mumbai, Maharashtra</p>
                            <p className='text-sm text-white/60'>Our Office Address</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-[30px] font-semibold mb-10'>Company</h3>
                <ul className='text-lg'>
                    <li className='mb-7'>
                        <Link>About Us</Link>
                    </li>
                    <li className='mb-7'>
                        <Link>Leadership</Link>
                    </li>
                    <li className='mb-7'>
                        <Link>Careers</Link>
                    </li>
                    <li className='mb-7'>
                        <Link>Blog</Link>
                    </li>
                </ul>
            </div>
            <div className='w-[35%]'>
                <form action="" className='w-full bg-[#1A1A1A] p-8 rounded-[20px] space-y-5'>
                    <input type="text" name="name" id="name" className='bg-transparent w-full px-6 py-4 rounded-full text-lg border border-white/60' placeholder='Full Name' />
                    <input type="email" name="email" id="" className='bg-transparent w-full px-6 py-4 rounded-full text-lg border border-white/60' placeholder='Email Address' />

                    <input type="number" name="number" id="" className='bg-transparent w-full px-6 py-4 rounded-full text-lg border border-white/60' placeholder='Phone Number' />
                    <textarea name="message" id="" placeholder='Message' className='bg-transparent w-full px-6 py-4 rounded-3xl text-lg border border-white/60'></textarea>

                    <button type='submit' className='px-6 py-4 rounded-full bg-[#FFFDFD] text-xl font-semibold text-black'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;