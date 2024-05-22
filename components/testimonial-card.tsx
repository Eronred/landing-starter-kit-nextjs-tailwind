import React from 'react'
interface TestimonialCardProps {
    avatar: string
    name: string
    position: string
    content: string
    title: string
}

export default function TestimonialCard({
    avatar,
    name,
    position,
    content,
    title,
}: TestimonialCardProps) {
    return (
        <div className="flex flex-col justify-between sm:max-w-[384px] lg:w-full w-full min-h-[363px] bg-[#1A202C] p-8 gap-4 rounded-xl">
            <div >
                <h5 className=" text-lg text-[#E0E9F4] font-semibold">
                    {title}
                </h5>
                <p className="text-[#E0E9F4] text-md mt-4">
                    {content}
                </p>
            </div>
            <div className="w-full border h-[1px] border-gray-800"></div>
            <div className="flex flex-row items-center mt-4 gap-4">
                <img
                    src={avatar}
                    alt="avatar"
                    className="w-14 h-14 rounded-lg"
                />
                <div className="flex flex-col">
                    <h5 className="text-[#fff] text-lg font-semibold">{name}</h5>
                    <p className="text-[#90A3BF] text-sm">
                        {position}
                    </p>
                </div>
            </div>
        </div>
    )
}
