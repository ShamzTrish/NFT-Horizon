'use client'

import { FC } from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { TitleText, TypingText } from '../components/CustomText'
import { insights } from '@/constants'
import InsightCard from '@/components/InsightCard'

interface InsightsProps {

}

const Insights: FC<InsightsProps> = ({ }) => {
    return <>
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title='| A recommended read for curious minds.' className='text-center' />
                <TitleText title='Insights about NFTs' className='text-center' />
                <div className='mt-[38px] flex flex-col gap-[20px]'>
                    {
                        insights.map((oneInsight, index) => (
                            <div key={`insight-${index}`} className='mb-8'>
                                <InsightCard
                                    {...oneInsight}
                                    index={index + 1} />
                            </div>

                        ))
                    }
                </div>
            </motion.div>
        </section>
    </>
}

export default Insights