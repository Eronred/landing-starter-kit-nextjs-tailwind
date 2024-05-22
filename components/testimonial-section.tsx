import { motion } from 'framer-motion'
import React from 'react'
import Container from './container'
import TestimonialCard from './testimonial-card'
import LeadingTitle from './leading-title'
import { fadeInAnimationByIndex } from '@/lib/animations'
import { testimonialData } from '@/lib/content'




export default function TestimonialSection() {
    return (
        <div id='testimonial' className="flex items-center w-full bg-background relative overflow-hidden">
            <Container bgColor="#0D121F">
                <div className="w-full flex flex-col items-center gap-4 text-white">
                    <div className="flex flex-col items-center gap-20 w-full justify-start">
                        <div className="flex flex-col items-center gap-3 w-full">
                            <LeadingTitle label='WHAT THEY SAY' />
                            <h3 className="text-4xl leading-[48px] font-semibold text-center max-w-[700px] text-white">
                                Our User Kind Words
                            </h3>
                            <motion.p
                                className="text-text-secondary-dark text-xl text-center mt-6 max-w-[500px]"
                                variants={fadeInAnimationByIndex}
                                initial="initial"
                                animate="animate"
                            >
                                Here are some testimonials from our user after using Spend.In to manage their business  expenses.
                            </motion.p>
                        </div>
                        <div
                            className="flex sm:flex-row sm:justify-center mt-8 flex-col flex-wrap items-center gap-8">
                            {
                                testimonialData.map((testimonial, index) => (
                                    <TestimonialCard
                                        key={index}
                                        avatar={testimonial.avatar}
                                        name={testimonial.name}
                                        position={testimonial.position}
                                        content={testimonial.content}
                                        title={testimonial.title}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}
