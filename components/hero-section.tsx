import { motion } from 'framer-motion'
import React from 'react'
import Container from './container'
import { Button } from "./button"
import { fadeInAnimationByIndex, moveInAnimationByIndex } from '@/lib/animations'

export default function HeroSection() {

    return (
        <div
            id='hero-section'
            className="flex items-center w-full bg-background relative overflow-hidden">
            <Container bgColor="#0D121F">
                <div className="w-full flex flex-col sm:items-center text-white">
                    <motion.h1
                        className="text-4xl sm:text-6xl text-balance font-bold sm:max-w-[700px] max-w-[400px] text-left sm:text-center"
                        variants={fadeInAnimationByIndex}
                        initial="initial"
                        animate={fadeInAnimationByIndex.animate(0)}
                    >
                        All your business expenses in one place
                    </motion.h1>
                    <motion.p
                        className="text-text-secondary-dark text-xl text-left sm:text-center mt-6 max-w-[500px]"
                        variants={fadeInAnimationByIndex}
                        initial="initial"
                        animate={fadeInAnimationByIndex.animate(2)}
                    >
                        Your one-stop finance empower platform.
                        Manage all your business expenses with our supafast app.
                    </motion.p>
                    <motion.div
                        variants={fadeInAnimationByIndex}
                        initial="initial"
                        animate={fadeInAnimationByIndex.animate(3)}
                        className="flex w-full items-center justify-center gap-4 flex-col sm:flex-row mt-10">

                        <Button
                            href="/"
                            variant="primary"
                            size="large"
                            label='Get Started'
                        />
                        <Button
                            href="/"
                            variant="secondary"
                            size="large"
                            label='Learn More'
                        />
                    </motion.div>
                    <motion.div
                        variants={moveInAnimationByIndex}
                        initial="initial"
                        animate={moveInAnimationByIndex.animate(1)}
                        className="flex items-center justify-center relative w-full mt-[150px] ">
                        <img
                            src="/image.png"
                            className="w-[100%] shadow-xl shadow-white absolute top-[-110px] sm:top-[-90px] left-1/2 transform -translate-x-1/2"
                        />
                    </motion.div>
                </div>
            </Container>
        </div>)
}
