'use client'

import { FC } from 'react'
import styles from '@/styles'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { TypingText } from '../../components/CustomText'
import { motion } from 'framer-motion'
import { FiChevronsDown } from 'react-icons/fi'
import Image from 'next/image'

interface AboutProps {

}

const About: FC<AboutProps> = () => {
    return <section className={`relative z-10`}>
        {/* <div className='gradient-02 opacity-30 z-0' /> */}
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`2xl:max-w-[1280px] md:w-[85%] mx-auto ${styles.flexCenter} flex-col mb-[90px] md:mb-20`}
        >
            <TypingText title="| The Future is Upon Us |" className='text-center pt-3' />


            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className='relative flex w-full h-[370px] text-center justify-center'
            >
                {/* circle IMAGE */}
                <Image width={1000} height={1000} src="/nftPage/blockchainCircle.png" alt="circle" className='w-full h-[95%] sm:h-[310%] object-cover md:scale-[1.2] opacity-20 md:opacity-10' />

                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className='absolute mt-11 lg:mt-[45px] font-normal text-[13px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-secondary-white w-[80%]'
                >
                    Are you curious about the exciting world of NFTs but find the technical aspects a bit overwhelming?<br /><br /><span className='font-extrabold text-white text-[15px] md:text-[22px]'>We&apos;ve got you covered!</span>

                    <br /><br /> Our website makes use of the &apos;Goerli Testnet&apos; on the Ethereum blockchain, offering a safe and risk-free environment for you to create your very first NFTs. You can experiment, learn, and perfect your NFT crafting skills without the worry of real cryptocurrency involvement.
                </motion.p>
            </motion.div>
        </motion.div>
    </section>
}

export default About