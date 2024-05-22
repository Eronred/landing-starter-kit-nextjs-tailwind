import React from 'react'

interface featureProps {
    description: string;
    isIncluded: boolean;
}

interface PriceCardProps {
    icon: string;
    title: string;
    description: string;
    priceMonthly: string;
    priceYearly: string;
    features: featureProps[];
    isYearly?: boolean;
    isPopular?: boolean;
    onClick?: () => void;
}

export default function PriceCard(
    { icon, title, description, priceMonthly, priceYearly, isYearly, features, onClick }: PriceCardProps
) {
    return (
        <div className='w-full sm:w-[384px] bg-[#FAFBFC] p-8 rounded-lg flex-row text-black'>
            <div className='flex items-start flex-col '>
                <div className='flex items-center space-x-3'>
                    <img src={icon} alt='icon' className='w-8 h-8' />
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                </div>
                <div className='flex flex-row items-center justify-center gap-2 mt-10'>
                    <p className='text-4xl font-semibold'>
                        {isYearly ? priceYearly : priceMonthly}
                    </p>
                    <p className=' text-[#596780] text-lg'>
                        {isYearly ? '/year' : '/month'}
                    </p>
                </div>
            </div>
            <p className='text-[#1A202C] mt-6 text-lg'>
                {description}</p>
            <div className='mt-8'>
                <ul className='space-y-5 '>
                    {features?.map((feature, index) => (
                        <li className='flex items-center space-x-2'>
                            <img src={feature.isIncluded ? '/checkmark.svg' : '/cross.svg'} alt='icon' className='w-5 h-5' />
                            <p>{feature.description}</p>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <button
                onClick={onClick}
                className='bg-[#7C5CFC] text-white w-full py-4 mt-10 rounded-full'>Get Started
            </button>
        </div>
    )
}
