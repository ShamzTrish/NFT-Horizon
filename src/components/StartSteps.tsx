

import { FC } from 'react'
import styles from '@/styles'



const StartSteps: FC = ({ }) => {
    return <>
        <div className={`${styles.flexCenter} flex-row`}>
            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
                <p className='font-bold text-[20px] text-white'>01</p>
            </div>
            <p className='flex-1 ml-[30px] text-[18px] text-[#b0b0b0] leading-[32px] font-normal'>Easy and Intuitive: Our user-friendly interface ensures that anyone, regardless of technical expertise, can confidently mint NFTs without the fear of getting lost in complex processes.</p>
        </div>
        <div className={`${styles.flexCenter} flex-row`}>
            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
                <p className='font-bold text-[20px] text-white'>02</p>
            </div>
            <p className='flex-1 ml-[30px] text-[18px] text-[#b0b0b0] leading-[32px] font-normal'>No Real ETH Required: Experience the minting process firsthand with Goerli testnet ETH, so you can practice without any financial risk</p>
        </div>
        <div className={`${styles.flexCenter} flex-row`}>
            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
                <p className='font-bold text-[20px] text-white'>03</p>
            </div>
            <p className='flex-1 ml-[30px] text-[18px] text-[#b0b0b0] leading-[32px] font-normal'>Learn at Your Pace: Take your time to understand the steps, learn about gas fees, and explore the art of minting NFTs in a safe and controlled environment..</p>
        </div>

    </>
}

export default StartSteps
