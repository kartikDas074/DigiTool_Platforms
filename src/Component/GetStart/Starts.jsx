import React from 'react';
import user from '../../assets/user.png'
import pack from '../../assets/package.png'
import rock from '../../assets/rocket.png'
const Starts = () => {
    return (
        <div className='w-full max-w-[90vw] mx-auto md:max-w-[85vw] flex flex-col gap-[36px] py-[60px] md:py-[120px]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[24px] md:text-[40px]  text-[#101727] font-bold'>Get Started in 3 Steps</h1>
                <p className='text-[16px] text-[#627382] font-normal text-center'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-[30px]'>
                <div className='flex flex-col shadow-sm px-[10px] py-[10px] md:px-5 md:py-5 rounded-[20px] bg-[#FFFFFF]'>
                    <div className='w-full flex justify-end'>
                        <p className='h-[30px] w-[30px] px-[5px] py-[5px] bg-primary text-[#FFFFFF] flex justify-center items-center rounded-full text-[14px]'>01</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-[100px] w-[100px] px-[20px] py-[20px] rounded-full bg-gray-200' src={user} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[20px] md:text-[24px]  text-[#101727] font-bold'>Create Account</h1>
                        <p className='text-[16px] text-[#627382] font-normal text-center'> Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-sm px-[10px] py-[10px] md:px-5 md:py-5 rounded-[20px] bg-[#FFFFFF]'>
                    <div className='w-full flex justify-end'>
                        <p className='h-[30px] w-[30px] px-[5px] py-[5px] bg-primary text-[#FFFFFF] flex justify-center items-center rounded-full text-[14px]'>02</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-[100px] w-[100px] px-[20px] py-[20px] rounded-full bg-gray-200' src={pack} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[20px] md:text-[24px]  text-[#101727] font-bold'>Choose Products</h1>
                        <p className='text-[16px] text-[#627382] font-normal text-center'> Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-sm px-[10px] py-[10px] md:px-5 md:py-5 rounded-[20px] bg-[#FFFFFF]'>
                    <div className='w-full flex justify-end'>
                        <p className='h-[30px] w-[30px] px-[5px] py-[5px] bg-primary text-[#FFFFFF] flex justify-center items-center rounded-full text-[14px]'>03</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-[100px] w-[100px] px-[20px] py-[20px] rounded-full bg-gray-200' src={rock} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[20px] md:text-[24px]  text-[#101727] font-bold'>Start Creating</h1>
                        <p className='text-[16px] text-[#627382] font-normal text-center'> Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starts;