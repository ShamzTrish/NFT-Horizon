'use client'

import { FC } from 'react'

import styles from '@/styles'
import { motion } from 'framer-motion'
import { TypingText } from '../components/CustomText'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { FiChevronsDown } from 'react-icons/fi'


interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
    return <section className={`${styles.paddings} relative z-10`}>
        <div className='gradient-02 opacity-30 z-0' />
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`2xl:max-w-[1280px] md:w-[85%] mx-auto ${styles.flexCenter} flex-col mb-20`}
        >
            <TypingText title="| The Future is Upon Us |" className='text-center pt-3' />


            <motion.div
                variants={fadeIn('up', 'tweet', 0.3, 1)}
                className='relative flex w-full h-[370px]'
                viewport={{ once: true, amount: 0.25 }}
            >
                {/* MAP IMAGE */}
                <img src="/map.png" alt="map" className='w-full h-[170%] md:h-[120% border-none object-cover md:border scale-[1.3] opacity-20 rounded-[200px]' />

                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className='absolute mt-7 xl:mt-[50px] font-normal text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-center text-secondary-white py-8 md:px-8 lg:px-16'
                >
                    Join & Support hardworking buildes who are pushing us towards inevitable future of <span className='font-extrabold text-white'>Crypto Gaming and Metaverse Revolution! </span>

                    Developers, token founders, and builders unite with a shared belief that Crypto gaming and metaverse experiences will shape the world. Inspired by <span className='font-extrabold text-white'>&ldquo;Ready Player One&ldquo;</span> we invest and build for this future years in advance.<br /><br />

                    Here on this website, we are offering you the opportunity to  <span className='font-extrabold text-white'>create your own NFT collection </span> and discover the best NFT creators in this space, so you can learn from the finest.  <span className='font-extrabold text-white'>Our mission </span> is to endorse new creators and unleash their creativity. <br /><br />

                    Let&apos;s elevate top creators, making a lasting impact on the NFT space!
                </motion.p>
            </motion.div>
            <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
                className='w-[22px] h-[32px] object-contain mt-[30px] md:mt-[10px] mr-8'>
                <FiChevronsDown className="text-white text-[60px] mt-8 opacity-50" />
            </motion.div>
        </motion.div>
    </section>

}

export default About



// UPRAVIT POZADI ZA ABOUT TEXTTEM
// UPRAVIT POZADI ZA ABOUT TEXTTEM
// UPRAVIT POZADI ZA ABOUT TEXTTEM
// UPRAVIT POZADI ZA ABOUT TEXTTEM
// UPRAVIT POZADI ZA ABOUT TEXTTEM
