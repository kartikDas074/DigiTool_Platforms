import React from 'react';
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className='w-full max-w-[95vw] mx-auto md:max-w-[85vw]  justify-center items-center py-15 lg:py-20 gap-[20px] grid grid-cols-1 md:grid-cols-2'>
            <div>
                <div className='bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 px-3 py-1.25 flex justify-center items-center gap-[8px] rounded-[30px] w-[80%]'>
                <div className='h-7 w-7 rounded-full bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 flex justify-center items-center'>
                    <div className='h-5 w-5 rounded-full bg-linear-to-r from-[#4F39F6]/50 to-[#9514FA]/50 flex justify-center items-center'>
                        <div className='h-3 w-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'></div>
                    </div>
                </div>
                <p className='text-[16px] font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </div>
                <div className='flex flex-col gap-[20px] my-[20px]'>
                    <h1 className='text-[40px] md:text-[72px] font-extrabold text-[#101727]'>Supercharge Your Digital Workflow</h1>
                    <p className='text-[16px] md:text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    Explore Products
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-[16px]'>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF] rounded-[20px] text-[16px]'>Explore Product</button>
                    <button className='btn border bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-[#4F39F6] rounded-[20px]'>Watch Demo</button>
                </div>
            </div>
            <div>
                <img className='' src={banner} alt="" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;