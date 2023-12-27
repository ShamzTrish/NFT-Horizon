'use client'

import { FC } from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '@/utils/motion'
import { TitleText, TypingText } from '../components/CustomText'
import Image from 'next/image'


interface WorldProps {

}

const World: FC<WorldProps> = ({ }) => {
    return <>
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title='| People on the World' className='text-center' />
                <TitleText title='Track your friends around you' className='text-center' />

                {/* MAP */}
                <motion.div
                    variants={fadeIn('up', 'tweet', 0.3, 1)}
                    className='relative mt-[68px] flex w-full h-[550px]'
                >
                    <Image width={1000} height={1000} src="/map.png" alt="map" className='w-full h-full object-cover' />

                    {/* PERSON 1 */}
                    <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                        <Image width={1000} height={1000} src="/people-01.png" alt="people" className='w-full h-full' />
                    </div>

                    {/* PERSON 2 */}
                    <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                        <Image width={1000} height={1000} src="/people-02.png" alt="people" className='w-full h-full' />
                    </div>

                    {/* PERSON 3 */}
                    <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                        <Image width={1000} height={1000} src="/people-03.png" alt="people" className='w-full h-full' />
                    </div>


                </motion.div>

            </motion.div>
        </section>
    </>
}

export default World