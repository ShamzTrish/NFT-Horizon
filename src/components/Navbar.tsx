'use client'

import { FC } from 'react'

import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'
import Link from 'next/link'
import { BsChevronLeft } from 'react-icons/bs'


interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {

    return <motion.div
        variants={navVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.xPaddings} pt-8 relative`}
    >
        <div className='absolute max-w-[100vw] inset-4 gradient-01' />
        <div className={`${styles.innerWidth} mx-auto flex max-w-[940px] relative justify-center`}>
            <Link href={'/'} className='cursor-pointer flex flex-row items-center'>
                <div className='ml-[-35px]'>
                    <div className='text-15px] text-orange-300 mr-2 md:mr-4 mt-2 md:mt-2 scale-[1.5]'><BsChevronLeft /></div>
                </div>
                <div>
                    <h1
                        className='font-bold lg:text-[10px] md:text-[8px] sm:text-[8px] text-[8px] lg:leading-[25px] md:leading-[14px] sm:leading-[20.4px] leading-[24.4px] uppercase text-white text-center tracking-[10px] md:tracking-[12px]'
                    >
                        NFT
                    </h1>
                    <h1
                        className="font-bold lg:text-[14px] md:text-[14px] sm:text-[14px] text-[12px] uppercase text-white tracking-[8px] md:tracking-[8px] relative"
                    >
                        <span>HORI</span>
                        <span
                            className="inline-block transform scale-y-165 scale-x-[4] skew-x-[32deg] font-light translate-x-4 -translate-y-1.9 -md:translate-y-[13px] text-gradient"
                        >
                            Z
                        </span>
                        <span>ON</span>
                    </h1>

                </div>
            </Link>
        </div>

    </motion.div >

}

export default Navbar