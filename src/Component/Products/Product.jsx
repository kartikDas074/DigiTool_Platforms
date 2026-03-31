import React, { useState } from 'react';
import ProductList from './ProductList';
import CartInfo from './CartInfo';

const Product = () => {
    const [product,setProduct]=useState(true);
    return (
        <div className='w-full max-w-[95vw] md:max-w-[80vw] mx-auto py-[60px] flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-[28px] md:text-[40px] font-extrabold text-[#101727] tracking-tight'>Premium Digital Tools</h1>
                <p className='text-[16px] md:text-[16px] font-medium text-[#627382] tracking-tight text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <button className='bg-gray-50 px-2.5 py-2 space-x-1 shadow-2xl rounded-[20px] mb-15 md:mb-20'>
               <button className={`btn  ${product?'bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-[#FFFFFF] font-semibold ':'bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-[18px] font-medium text-transparent'} rounded-[25px]` } onClick={()=>{setProduct(true)}}>Products</button>
              
               <button className={`btn  ${!product?'bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-[#FFFFFF] font-semibold ':'bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-[18px] font-medium text-transparent'} rounded-[25px]`}  onClick={()=>{setProduct(false)}}>Cart (<span>0</span>)</button>
            </button>
            <div>
            {
            Product?<ProductList></ProductList>:<CartInfo></CartInfo>
            }
            </div>
           
            
        </div>
    );
};

export default Product;