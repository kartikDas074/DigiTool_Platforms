import React from 'react';
import Pricing from './Pricing';

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for getting started",
    price: 0,
    currency: "$",
    duration: "month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month"
    ],
    buttonText: "Get Started Free"
  },
  {
    id: 2,
    name: "Pro",
    description: "Best for professionals",
    price: 29,
    currency: "$",
    duration: "month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    buttonText: "Start Pro Trial"
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For teams and businesses",
    price: 99,
    currency: "$",
    duration: "month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    buttonText: "Contact Sales"
  }
];
const Transparent_pricing = () => {
    return (
        <div className='w-full max-w-[90vw] mx-auto md:max-w-[80vw] flex flex-col gap-[36px] py-[60px] md:py-[120px]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[24px] md:text-[40px]  text-[#101727] font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-[16px] text-[#627382] font-normal text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 space-x-3  space-y-8'>
              {
                pricingPlans.map(price=><Pricing key={price.id} price={price}></Pricing>)
              }
            </div>
            
        </div>
    );
};

export default Transparent_pricing;