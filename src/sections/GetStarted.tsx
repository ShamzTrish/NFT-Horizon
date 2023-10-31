'use client'

import { FC } from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import { TitleText, TypingText } from '../components/CustomText'


interface GetStartedProps {

}

const GetStarted: FC<GetStartedProps> = ({ }) => {
    return <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >

            {/* rolling planet */}
            <motion.div
                variants={planetVariants('left')}
                viewport={{ once: true }}
                className={`flex-1 ${styles.flexCenter}`}
            >
                <img
                    src='/getStarted/nft1.png'
                    alt='getStarted'
                    className='w-[90%] h-[90%] object-contain'
                />
            </motion.div>

            {/* TEXT */}
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] flex justify-center flex-col'
            >
                <TypingText
                    title='| How NFTs work' />
                <TitleText
                    title='Get started with only few Clicks' />
                <div className='mt-[32px] flex flex-col max-w-[370px] gap-[24px]'>
                    <div className={`${styles.flexCenter} flex-row`}>
                        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
                            <p className='font-bold text-[20px] text-white'>01</p>
                        </div>
                        <p className='flex-1 ml-[30px] text-[18px] text-[#b0b0b0] leading-[32px] font-normal'>jjjjjikjkjjjjkjk</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
}

export default GetStarted