'use client'

import { FC } from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import styles from '@/styles';
import { ExploreNFT } from '@/constants';
import { cn } from '@/utils/utils';
import Image from 'next/image';
import { SiOpensea } from 'react-icons/si'


export interface ExploreCardProps extends ExploreNFT {
    index: number
    active: string
    handleClick: (id: string) => void
}

const ExploreCard: FC<ExploreCardProps> = ({ index, id, imgUrl, title, handleClick, active }) => {
    return <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={cn('relative flex items-center justify-center min-w-[130px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer', {
            'lg:flex-[3.5] flex-[15]': active === id,
            'lg:flex-[0.5] flex-[2]': active !== id
        })}
        onClick={() => handleClick(id)}
    >

        {/* image for each NFT */}
        <Image src={imgUrl} alt={title} width={1000} height={1000} className={cn('absolute w-full h-full object-cover rounded-[24px]', {
            'opacity-50 lg:opacity-80': active !== id
        })} />

        {
            active !== id ? (
                <h3 className="font-semibold sm:text-[22px] text-[13px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                    {title}
                </h3>
            ) : (
                // overlay card on each Nft picture
                <div className="absolute bottom-0 p-5 flex justify-between w-full flex-row items-center bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                    <div className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[24px] glassmorphism px-[5px]`}>
                        <SiOpensea
                            className="text-[30px] object-contain text-white"
                        />
                    </div>
                    {/* <p className="font-normal text-[15px] leading-[17px] text-white uppercase">
                        Enter OpenSea
                    </p> */}
                    <h2 className="font-semibold sm:text-[24px] text-[16px] text-white text-end">
                        {title}
                    </h2>
                </div>
            )
        }

    </motion.div>
}

export default ExploreCard

