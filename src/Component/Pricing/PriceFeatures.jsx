
import { Check } from 'lucide-react';
import React from 'react';

const PriceFeatures = ({name,feto}) => {
     console.log(name);
     console.log(feto);
    return (
       <li className={`flex gap-[10px] text-[14px] font-medium ${name=='Pro'?'text-[#FFFFFF] ':'text-[#627382]'}`}><Check className={`${name=='Pro'?'text-[#FFFFFF]':'text-[green]'}`}></Check>{feto}</li>
    );
};

export default PriceFeatures;