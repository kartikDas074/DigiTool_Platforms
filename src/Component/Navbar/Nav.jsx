import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { Menu, X } from 'lucide-react';
import CartIcon from '../../assets/products/shopping-cart.png'

const menuItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];
const Nav = ({count}) => {
    const [open,setOpen]=useState(true);
    let menu=menuItems.map(menu=><MenuItem key={menu} menu={menu}></MenuItem>)
    return (
        <div className='w-full max-w-[95vw] md:max-w-[85vw] mx-auto flex justify-between items-center' >
            <div className='flex gap-2.5 justify-center items-center'>
                <span onClick={()=>{setOpen(!open)}} className='md:hidden'>
                    {open?<Menu></Menu>:<X></X>}
                </span>
                <h1 className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-[24px] font-extrabold text-transparent md:text-[50px]'>
                    DigiTools
                </h1>
            </div>
            <ol className={`absolute ${open?'-top-75':'top-9.5'} ${open?'left-8.75':'left-8.75'} border-solid border-2 border-[#884949] px-2.5 py-2.5 shadow-sm rounded-[5px] duration-1000 md:hidden`}>
                    {menu}
            </ol>
            <ol className='hidden md:flex md:items-center gap-2 md:justify-center'>
                 {menu}
            </ol>
            <div className='flex flex-col md:flex-row justify-center items-center gap-1.25'>
                <div className='flex justify-center items-center space-x-1'>
                      <div className='relative'>
                        <img className='h-4 w-4' src={CartIcon} alt="" />
                        <p className={`absolute -top-2 bg-red-300 rounded-full left-1.5 px-[3px] text-[8px] flex justify-center items-center ${count>0?'flex':'hidden'}`}>{count}</p>
                      </div>
                      <p className='text-[16px] font-semibold text-[#101727]'>LogIn</p>
                </div>
               
               <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-[#FFFFFF] rounded-3xl text-[16px] font-semibold'>Get Started</button>
            </div>
        </div>
    );
};

export default Nav;