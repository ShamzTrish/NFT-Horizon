'use client'

import { FC } from 'react'
import styles from '@/styles'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { useState } from 'react'
import { TitleText, TypingText } from '../components/CustomText'
import { ExploreNFT, exploreWorlds } from '@/constants'
import ExploreCard from '@/components/ExploreCard'

const Explore: FC = () => {
    const [active, setActive] = useState<string>('nft-2')

    return <section className={`${styles.paddings}`} id='explore'>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText
                title='| Discover "Blue-Chip" Projects |'
                className="text-center"
            />
            <TitleText
                title="The Best Collections Out There"
                className='text-center'
            />
            {/* maping through our nfts and displaying card for each */}
            <div className='mt-[35px] flex lg:flex-row flex-col min-h-[50vh] gap-5'>
                {exploreWorlds.map((world: ExploreNFT, index) => (
                    <ExploreCard
                        key={world.id}
                        {...world}
                        index={index}
                        active={active}
                        handleClick={setActive}
                    />
                ))}
            </div>
        </motion.div>
    </section>
}

export default Explore