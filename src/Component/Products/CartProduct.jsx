import React from 'react';
import * as Icons from 'lucide-react';
import { Delete } from 'lucide-react';
import { toast } from 'react-toastify';
const CartProduct = ({cart,setTot,total,all,setAll,setCount,count}) => {
    let Icon=Icons[cart.icon];
    let remove=(cart)=>{
         let val=parseFloat(total)-parseFloat(cart.price);
          let valu=Number(val.toFixed(3));
           setTot(valu);
           let Card=all.filter(val=>val.id!=cart.id);
           setAll(Card);
           setCount(count-1);
           toast.error("Item Removed! 🗑️", {
        autoClose: 1500,
        theme: "dark", 
    })
    }
    return (
        
             <div className='flex justify-between items-center bg-gray-100 py-[20px] px-[10px] md:px-[40px] rounded-[15px]'>
                <div className='flex justify-center items-center gap-[5px]'>
                    <Icon className='text-[18px] text-[green]'></Icon>
                    <div>
                    <h2 className='text-[18px] text-[#101727] font-medium'>{cart.name}</h2>
                    <p className='text-[16px] font-bold text-[black]'>{cart.price}$</p>
                    </div>
                </div>
                
                <div className='flex justify-center items-center gap-[5px] cursor-pointer' onClick={()=>{remove(cart)}}>
                    <p className='text-[#e80a0a] text-[14px] '>remove</p>
                    <Delete className='text-[#e80a0a] text-[14px] '></Delete>
                </div>
             </div>
        
    );
};

export default CartProduct;