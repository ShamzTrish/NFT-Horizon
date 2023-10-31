'use client'

import { FC } from 'react'
import { Insight } from '@/constants'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Link from 'next/link'
import Image from 'next/image'

interface InsightCardProps extends Insight {
    index: number
}

const InsightCard: FC<InsightCardProps> = ({ index, title, imgUrl, subtitle, articleUrl }) => {
    return <>
        <Link href={articleUrl} target='_blank'>
            <motion.div
                variants={fadeIn('up', 'spring', index * 0.5, 1)}
                className='flex md:flex-row flex-col gap-4'>

                <Image width={1000} height={1000} src={imgUrl} alt='planet' className='md:w-[190px] w-full h-[170px] rounded-[32px] object-cover' />

                <div className='w-full flex justify-between items-center'>
                    <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                        <h4 className='font-normal lg:text-[28px] text-[22px] text-white'>{title}</h4>
                        <p className='mt-[16px] font-normal lg:text-[15px] text-[12px] text-secondary-white'>{subtitle}</p>
                    </div>
                </div>

            </motion.div>
        </Link >
    </>
}

export default InsightCard