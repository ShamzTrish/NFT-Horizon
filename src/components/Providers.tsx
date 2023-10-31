'use client'

import { FC, ReactNode } from 'react'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from '@thirdweb-dev/sdk';



interface ProvidersProps {
    children: ReactNode
}


const Providers: FC<ProvidersProps> = ({ children }) => {

    return <>

        <ThirdwebProvider activeChain={Goerli} clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}>
            {children}
        </ThirdwebProvider>

    </>
}

export default Providers