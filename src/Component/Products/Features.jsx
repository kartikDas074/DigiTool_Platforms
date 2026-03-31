import { Check } from 'lucide-react';
import React from 'react';

const Features = ({item}) => {
    return (
        <li className='flex gap-[10px] text-[18px] font-medium text-[#627382]'><Check className='text-[green]'></Check>{item}</li>
    );
};

export default Features;