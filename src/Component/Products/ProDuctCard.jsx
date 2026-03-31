import React, { useState } from 'react';
import { toast } from 'react-toastify';

import * as Icons from "lucide-react";
import Features from './Features';
const ProDuctCard = ({product,count,setCount,card,setCard,total,setTotal}) => {
    const Icon = Icons[product.icon];
    const [buy,setBuy]=useState('Buy Now');
    const ClickBuy=(product)=>{
        const isExist = card.find(item => item.id === product.id);
        if(!isExist)
        {
        setCard([...card,product]);
        setCount(count+1);
        let val=parseFloat(total)+parseFloat(product.price);
        let valu=Number(val.toFixed(3));
        setTotal(valu);
        }
         setBuy('Added To Cart');
        toast.success("Added to cart 🛒", {
        theme: "dark", 
         autoClose: 1500
    });
    }
    return (
             <div className=' flex flex-col justify-center  gap-[16px] shadow-sm px-[20px] py-5 rounded-[15px] translate-all duration-1000 hover:-translate-2 hover:shadow-xl hover:bg-linear-to-t from-[#cdccd6] to-[#e0c7f2] '>
            <div className='flex justify-end items-center'>
                <div className='bg-[#bec1cb] w-[100px] flex flex-col justify-center items-center rounded-[20px]'>
                <h1 className={`px-1.25 py-1.25 text-[16px] font-medium w-full text-center rounded-[20px] ${product.tagType=='Best Seller'?'text-[#BB4D00] bg-[#FEF3C6]':product.tagType=='Popular'?'bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent bg-[#bec1cb]':'bg-[#DBFCE7] text-[#0A883E]'}`}>{product.tagType}</h1>
             </div>
            </div>
             
             <div >
                <Icon className='h-12 w-12 px-2 py-2 border-[#0a0404]/10 rounded-full bg-[#F2F2F2] text-[green] border-1'></Icon>
             </div>
             <div className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[20px] md:text-[25px] font-bold text-[#101727]'>{product.name}</h1>
                <p className='text-[16px]  font-regular text-[#627382]'>{product.description}</p>
             </div>
             <h3><span className='text-[20px] md:text-[25px] font-bold text-[#101727]'>${product.price}</span><span className='text-[16px] font-regular text-[#627382]'>/{product.period}</span></h3>
             <ul>
                {
                    product.features.map(item=><Features key={item} item={item}></Features>)
                }
             </ul>
             <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-[30px] text-[#FFFFFF]' onClick={()=>{ClickBuy(product)}}>{buy}</button>


             
        </div>
    );
};

export default ProDuctCard;