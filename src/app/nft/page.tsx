'use client'

import { FC } from 'react'
import { motion } from 'framer-motion';
import styles from '@/styles';
import Intro from '@/sections/NFTMint/Intro';
import About from '@/sections/NFTMint/About';
import Mint from '@/sections/NFTMint/Mint';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';



const page: FC = ({ }) => {

    return <>
        <Navbar />
        <motion.main
            className={`pl-6 pr-6 md:p-11 mx-auto overflow-hidden`}
        >
            <Intro />
            <div className="relative">
                <About />
                <Mint />
                <Footer />
            </div>


        </motion.main >
    </>

}

export default page