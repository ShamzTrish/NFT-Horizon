// import Moralis from 'moralis';

// // Initialize Moralis with your Moralis application ID and server URL
// Moralis.start({ apiKey: process.env.NEXT_PUBLIC_API_KEY });


// // Claiming process using Moralis
// const claimTestnetEther = async (userAddress: string) => {
//     try {
//         // Initiate a transaction using Moralis's web3.js integration or serverless functions
//         const transaction = await Moralis.Web3API.native.transfer({
//             to_address: userAddress,
//             value: '1000000000000000', // Amount in Wei (1 ETH)
//         });

//         // Handle success, update UI, etc.
//         console.log('Transaction initiated:', transaction);
//     } catch (error) {
//         // Handle error and provide feedback to the user
//         console.error('Error claiming testnet Ether:', error);
//     }
// };

// // Usage
// const userAddress = '0x...'; // User's Ethereum address
// claimTestnetEther(userAddress);
