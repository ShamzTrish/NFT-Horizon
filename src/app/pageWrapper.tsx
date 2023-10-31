'use client'

import { AnimatePresence, motion } from "framer-motion"
import { FC, ReactNode } from "react"

interface pageWrapperProps {
  children: ReactNode

}


const PageWrapper: FC<pageWrapperProps> = ({ children }) => {

  return <>
    <AnimatePresence>
      <motion.div
        // initial={{ opacity: 0, y: 15 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: 15 }}
        // transition={{ delay: 0.25 }}
        // initial={{ width: 0 }}
        // animate={{ width: '100%' }}
        // exit={{ x: window.innerWidth }}
        // transition={{ delay: 0.25 }}
        initial={{ x: 1500 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ duration: 0.7, type: 'tween' }}

      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
}


export default PageWrapper