'use client'

import { FC, HTMLAttributes } from 'react';
import { textContainer, textVariant2 } from '@/utils/motion';
import { motion } from 'framer-motion'
import { cn } from '@/utils/utils';


interface TextProps extends HTMLAttributes<HTMLElement> {
    title: string
}

export const TypingText: FC<TextProps> = ({ className, title }) => (
    <motion.p
        variants={textContainer}
        className={cn('font-normal text-[15px] text-secondary-white mb-4', className)}
    >

        {/* function for displaying letter one by one */}
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}    </motion.p>
)



export const TitleText: FC<TextProps> = ({ className, title }) => (
    <motion.h2
        variants={textVariant2}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className={cn('mt-[8px] font-bold md:text-[46px] text-[27px] text-white', className)}
    >
        {title}

    </motion.h2>
)