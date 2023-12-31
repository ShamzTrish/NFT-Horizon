"use client"

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

import { FC } from 'react'
import { socials } from '@/constants';
import Image from 'next/image';

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <footer>
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className="footer-gradient" />
            <div className={`mx-auto flex flex-col gap-8`}>
                <div className="flex flex-col">
                    <div className="mb-[50px] h-[2px] bg-white opacity-10" />

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h4 className="font-extrabold text-[24px] text-white">
                            NFT HORIZON
                        </h4>
                        <p className="font-normal text-[14px] text-white opacity-50">
                            Copyright ©2023 NFT HORIZON - All rights reserved
                        </p>

                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <Image
                                    height={1000}
                                    width={1000}
                                    key={social.name}
                                    src={social.url}
                                    alt={social.name}
                                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    </footer>
}

export default Footer

