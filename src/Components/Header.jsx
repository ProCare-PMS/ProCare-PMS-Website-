
import React, { useState } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';
import logo from './../assets/img/logo.jpg';
import { Link } from 'react-router-dom'; 

function Header() {
    const [toggle, setToggle] = useState(false);
    
    const menuList = [
        { id: 1, title: 'Home', path: '/home' },
        { id: 2, title: 'Features', path: '/features' },
        { id: 3, title: 'Pricing', path: '/pricing' },
        { id: 4, title: 'About Us', path: '/about' },
        { id: 5, title: 'Contact Us', path: '/contact' },
    ];

    return (
        <div className='flex items-center justify-between p-4'>

            <img src={logo} alt="PreCare Image" className="w-[70px]" />

            <div className='hidden md:flex gap-4 flex-grow justify-center'>
                {menuList.map((item) => (
                    <Link to={item.path} key={item.id}>
                        <h2 className={`text-[16px] px-3 py-1 cursor-pointer 
                            ${item.title === 'Home' ? 'text-blue-500' : 'text-black'}
                            hover:border-[1px] border-blue-500 rounded-full`}>
                            {item.title}
                        </h2>
                    </Link>
                ))}
            </div>

            <div className='flex gap-4'>
                <Link to="./Login.jsx">
                    <h2 className='text-black hover:border-[1px] border-blue-500 rounded-full text-[18px] px-3 py-1 cursor-pointer'>
                        Log in
                    </h2>
                </Link>
                <Link to="/get-started">
                    <h2 className='text-black 
                    hover:border-[1px] border-blue-500 rounded-full
                    text-[19px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-blue-400 to-blue-400 '>
                        Get Started
                    </h2> 
                </Link>
            </div>

            {/* Hamburger menu for mobile view */}
            <div className='md:hidden'>
                {!toggle ? (
                    <HiBars3BottomRight onClick={() => setToggle(!toggle)} className='text-black text-[22px] cursor-pointer' />
                ) : (
                    <HiOutlineXMark onClick={() => setToggle(!toggle)} className='text-black text-[22px] cursor-pointer' />
                )}
                {toggle ? <MenuOverlay menuList={menuList} /> : null}
            </div>
        </div>
    );
}

export default Header;