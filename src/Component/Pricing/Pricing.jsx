import React from 'react';
import PriceFeatures from './PriceFeatures'
const Pricing = ({price}) => {
    // console.log(price.features);
    return (
        <div className={`flex flex-col  shadow-sm px-[10px] py-[20px] md:px-5 md:py-5 space-x-2.5 ${price.name=='Pro'?'z-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] ':'bg-[#FFFFFF] z-0'} rounded-[20px] gap-[20px] relative gap-[16px] h-[440px]`}>
             {
               price.name=='Pro'? <div className='px-[5px] py-[5x] text-[#BB4D00] text-[16px] bg-[#ede6e1] w-[150px] rounded-[20px] text-center absolute -top-2 left-15 md:left-23'>
                Most Popular
            </div>:''
            }
            
           
           <div className='flex flex-col justify-center items-start h-[70px]'>
              <h1 className={`text-[24px] font-bold ${price.name=='Pro'?'text-[#FFFFFF]':'text-[#101727]'}`}>{price.name}</h1>
              <p className={`text-[16px] font-regular ${price.name=='Pro'?'text-[#FFFFFF]':'text-[#627382]'}`}>{price.description}</p>
        </div>
         <p className={` h-[50px] text-[24px] font-bold ${price.name=='Pro'?'text-[#FFFFFF]':'text-[#101727]'}`}>{price.price}$ <span className={`text-[16px] font-regular ${price.name=='Pro'?'text-[#FFFFFF]':'text-[#627382]'}`}>/{price.duration}</span></p>
          <ul className='flex flex-col justify-start items-start h-[150px]'>
        {
             price.features.map((fets,index)=><PriceFeatures key={index} name={price.name} feto={fets}></PriceFeatures>)
        }
       </ul>
       <button className={` h-[50px] btn ${price.name!='Pro'?'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[#FFFFFF]':'bg-[#FFFFFF]'}`}>{price.buttonText}</button>
       </div>
    );
};

export default Pricing;

