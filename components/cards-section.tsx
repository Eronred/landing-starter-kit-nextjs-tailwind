import React from 'react'
import Container from './container'
import LeadingTitle from './leading-title'
import { motion } from 'framer-motion'

const cards = [
    {
        title: "Automatic Invoice Payment",
        description:
            "No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!",
        image: "/card-image-1.svg",
    },
    {
        title: "Clear payment history",
        description:
            "Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!",
        image: "/card-image-2.svg",
    },
    {
        title: "Use of multi-card payments",
        description:
            "Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!",
        image: "/card-image-3.svg",
    },
]

export default function CardsSection() {
    return (
        <div id='benefit' className="flex items-center w-full">
            <Container >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="w-full flex flex-col items-start gap-4  ">
                    <div className="flex flex-row  flex-wrap items-center sm:items-end w-full justify-start">
                        <div className="flex flex-col items-start gap-4">
                            <LeadingTitle label='WHY USE SPEND.IN' />
                            <h3 className="text-4xl sm:mt-3 leading-[48px] font-bold text-left max-w-[300px] text-text-dark">
                                Easy, Simple, Affordable
                            </h3>
                        </div>
                        <p className="text-gray-600 text-xl leading-8 mt-3 max-w-[500px] sm:max-w-[600px] ">
                            Our platform helps your business in managing expenses. These are
                            some of the reasons why you should use our platform in managing
                            business finances.
                        </p>
                    </div>
                    <div
                        className=" flex lg:flex-row flex-col gap-6 items-start justify-between w-full mt-8 sm:mt-16"
                    >
                        {cards.map((_, index) => (
                            <div key={index} className="w-full mb-4 rounded-lg">
                                <div className="w-full bg-gray-100 h-[384px] rounded-lg relative overflow-hidden">
                                    <div className="ml-[-40px] mt-10 h-full object-cover w-full ">
                                        <img
                                            className={`${_.image === "/card-image-3.svg" ? " object-center" : "w-full h-full"} object-cover `}
                                            src={`${_.image}`}
                                            style={{ objectPosition: 'right top' }}
                                        />
                                    </div>

                                </div>
                                <div className="flex flex-col items-start mt-6 gap-3">
                                    <h3 className="text-2xl font-semibold mt-3 text-dark">
                                        {_.title}
                                    </h3>
                                    <p className="text-text-secondary-light">
                                        {_.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </div>)
}
