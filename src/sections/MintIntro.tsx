'use client'

import { FC } from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, rollInVariants } from '@/utils/motion'
import { TitleText, TypingText } from '../components/CustomText'
import Link from 'next/link'
import Image from 'next/image'

interface MintIntroProps {

}

const MintIntro: FC<MintIntroProps> = ({ }) => {
    return <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >

            {/* TEXT */}
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className='flex-[1] flex justify-center flex-col'
            >
                <TypingText
                    title="| How to Start? |"
                    className='text-left' />
                <TitleText
                    title='Get started with only few clicks'
                    className='text-[20px] md:text-[25px] text-center sm:text-left' />
                <div className='mt-[40px] flex flex-wrap justify-between gap-[13px]'>
                    {/* first step */}
                    <div className='flex flex-1 flex-col sm:max-w-[220px] min-w-[180px]'>
                        {/* IKON */}
                        <div className='flex md:flex-col gap-6 md:gap-0'>
                            <div className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[24px] bg-[#323f5d]`}>
                                <Image src='/vrpano.svg' width={100} height={100} alt="icon" className='w-1/2 h-1/2 object-contain' />
                            </div>

                            <h1 className='mt-[26px] font-bold text-[20px] leading-[20px] text-white'>Claim testnet ETH</h1>
                        </div>
                        <p className='flex-1 mt-[16px] font-normal text-13px text-[#b0b0b0] leading-[27px]'>We provide you website where to claim your test ETH.</p>
                    </div>

                    {/* second step */}
                    <div className='flex flex-1 flex-col sm:max-w-[220px] min-w-[180px]'>
                        {/* IKON */}
                        <div className='flex md:flex-col gap-6 md:gap-0'>

                            <div className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[24px] bg-[#323f5d]`}>
                                <Image src='/headset.svg' width={100} height={100} alt="icon" className='w-1/2 h-1/2 object-contain' />
                            </div>
                            <h1 className='mt-[26px] font-bold text-[20px] leading-[20px] text-white'>Mint your NFT</h1>
                        </div>

                        <p className='flex-1 mt-[16px] font-normal text-13px text-[#b0b0b0] leading-[27px]'>You can try the whole process without spending real assets.</p>
                    </div>

                </div>
                {/* link */}
                <div className='relative my-6 md:mt-6'>
                    <Link href={'/nft'} className='mt-[16px] font-normal text-13px leading-[27px] customBtn'>Let&apos;s Mint!</Link>
                </div>

            </motion.div>

            {/* rolling img */}
            <motion.div
                variants={rollInVariants('right')}
                viewport={{ once: true }}
                className={`flex-1 ${styles.flexCenter}`}
            >

                <Image
                    src='/whatsnew/mint.png'
                    alt='getStarted'
                    className='w-[90%] h-[90%] object-contain'
                    width={1000} height={1000}
                />
            </motion.div>
        </motion.div>
    </section>
}

export default MintIntro