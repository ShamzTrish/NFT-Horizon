'use client'

import { FC } from 'react'
import { fadeIn, slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '@/utils/motion'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from '../../components/CustomText'
import Image from 'next/image'
import blockchainPic from '../../../public/nftPage/blockchain.png'
import mphImg from '../../../public/nftPage/mph.png'
import mintBtn from '../../../public/nftPage/mint.webp'
import styles from '@/styles'

interface IntroProps {

}

const Intro: FC<IntroProps> = () => {
    return <>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}>

            {/* BACKGROUND IMAGE */}
            <div className='absolute ml-[-100px] mt-[80px] flex max-w-[100%] h-[900px] md:h-[630px] overflow-hidden'>
                <Image src={blockchainPic} alt="nodeImg" className='w-full max-w-[100%] rotate-90 md:rotate-0 scale-[3] md:scale-[1.1] object-contain opacity-5' />
            </div>

            {/* HEADER */}
            <div className='relative mt-[40px] mb-4 z-10'>
                <motion.h1
                    variants={textVariant(1)}
                    className='font-bold lg:text-[55px] md:text-[35px] sm:text-[30px] text-[24px] lg:leading-[90px] md:leading-[80px] sm:leading-[74.4px] leading-[44.4px] uppercase text-white text-center tracking-[10px] md:tracking-[10px]'
                >
                    TRY TO MINT ON <span className='lg:text-[55px] md:text-[55px] sm:text-[45px] text-[34px]'>TESTNET!</span>
                </motion.h1>
            </div>
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] w-full flex justify-center flex-col'
            >
                <TypingText
                    title="| Why Choose Our Platform? |"
                    className="text-center my-2 py-4" />
            </motion.div>

            {/* LEFT SIDE */}
            <div className="flex flex-col items-center xl:flex-row lg:justify-between mb-[100px]">

                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className='flex-[1] w-full items-center xl:items-start flex justify-center flex-col'
                >
                    <TitleText
                        title='Get started with only few Clicks'
                        className="md:text-[30px] text-center xl:text-start" />
                    <div className='mt-[32px] flex flex-col max-w-[570px] gap-[24px]'>

                        <div
                            className={`${styles.flexCenter} flex-row`}
                        >
                            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
                                <p className='font-bold text-[20px] text-white'>01</p>
                            </div>
                            <p className='flex-1 ml-[30px] text-[16px] text-[#b0b0b0] leading-[32px] font-normal'><strong className='text-zinc-200'>Easy and Intuitive:</strong> Our user-friendly interface ensures that anyone, regardless of technical expertise, can confidently mint NFTs without the fear of getting lost in complex processes.</p>
                        </div>

                        <div
                            className={`${styles.flexCenter} flex-row`}
                        >
                            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
                                <p className='font-bold text-[20px] text-white'>02</p>
                            </div>
                            <p className='flex-1 ml-[30px] text-[16px] text-[#b0b0b0] leading-[32px] font-normal'><strong className='text-zinc-200'>No Real ETH Required:</strong> Experience the minting process firsthand with Goerli testnet ETH, so you can practice without any financial risk</p>
                        </div>

                        <div className={`${styles.flexCenter} flex-row`}>
                            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
                                <p className='font-bold text-[20px] text-white'>03</p>
                            </div>
                            <p className='flex-1 ml-[30px] text-[16px] text-[#b0b0b0] leading-[32px] font-normal'><strong className='text-zinc-200'>Learn at Your Pace:</strong> Take your time to understand the steps, learn about gas fees, and explore the art of minting NFTs in a safe and controlled environment..</p>
                        </div>

                    </div>
                </motion.div>

                {/* RIGHT SIDE PICTURE*/}
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                >
                    <Image src={mphImg} alt="mphImage" width={600} height={100} className="z-10 overflow-hidden mt-[80px] md:mt-6" />

                    {/* stamp */}
                    <div className='w-full flex justify-end sm:-mt-[90px] -mt-[150px] md:-mt-[50px] md:pr-[45px] relative z-10'>
                        <a href='#mint'>
                            <div className='mintStamp'>
                                <Image src={mintBtn} alt='stamp' className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rounded-[100px] bg-zinc-700 opacity-70 scale-50 p-4' />
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </>

}

export default Intro

