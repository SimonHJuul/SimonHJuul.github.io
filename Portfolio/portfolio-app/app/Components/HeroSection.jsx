"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    
    <section className='lg:py-16'>
        <div className="grid grid-cols1 lg:grid-cols-12">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                        Hello, It&apos;m {" "}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Simon Juul',
                            1000,
                            'Game Developer',
                            1000,
                            'Interaction Designer',
                            1000,
                            'UX Designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                Dynamic and forward-thinking professional with a Mastert&apos;s degree in Game Development and Learning
                Technology Engineering.
                </p>
                <div>
                    <button className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-third-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'> 
                        Hire me 
                    </button>
                    <button className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-third-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3'>
                         <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src='/images/ProfilePic-BG.png'
                        alt='Simon Juul'
                        width={300}
                        height={300}
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
