import React from 'react';

const Transform = () => {
    return (
        <div className='w-full max-w-[90vw] mx-auto md:max-w-[80vw] flex flex-col gap-[36px] py-[60px] md:py-[120px]'>
            <div>
                <h1 className='text-[24px] md:text-[40px]  text-[#FFFFFF] font-medium text-center'>Ready to Transform Your Workflow?</h1>
                <p className='text-[14px] text-[#ffffff] font-normal text-center'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>
            <div className=' flex justify-center items-center gap-[20px]'>
                <button className='btn bg-[#FFFFFF] text-[#3e1e46] rounded-[20px]'>Explore Products</button>
                <button className='btn px-[30px] bg-transparent text-[#FFFFFF] rounded-[20px]'>View Pricing</button>
            </div>
            <p className='text-[12px] text-[#ffffff] font-normal text-center'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Transform;