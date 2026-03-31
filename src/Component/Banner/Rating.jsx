import React from 'react';

const Rating = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 w-full max-w-[95vw] mx-auto gap-[16px] md:max-w-[85vw]'>
            <div className='flex flex-col justify-center items-center gap-[10px] border-r-none md:border-r md:border-[#FFFFFF]'>
                <h1 className='text-[40px] text-[#FFFFFF] font-extrabold'>50k+</h1>
                <p className='text-[16px] text-[#FFFFFF] font-medium'>Active Users</p>
                <div className='border border-[#FFFFFF] w-[80%] md:hidden'></div>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-[10px] border-r-none md:border-r md:border-[#FFFFFF]'>
                <h1 className='text-[40px] text-[#FFFFFF] font-extrabold'>200+</h1>
                <p className='text-[16px] text-[#FFFFFF] font-medium'>Premium Tools</p>
                 <div className='border border-[#FFFFFF] w-[80%] md:hidden'></div>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-[10px]'>
                <h1 className='text-[40px] text-[#FFFFFF] font-extrabold'>4.9</h1>
                <p className='text-[16px] text-[#FFFFFF] font-medium'>Rating</p>
                
            </div>
        </div>
    );
};

export default Rating;