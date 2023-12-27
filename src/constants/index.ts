export interface ExploreNFT {
  id: string;
  imgUrl: string;
  title: string;
  url: string;
  web: string;
}

export interface Insight {
  imgUrl: string;
  title: string;
  subtitle: string;
  articleUrl: string;
}

export interface Social {
  name: string;
  url: string;
}

export const exploreWorlds: ExploreNFT[] = [
  {
    id: "nft-1",
    imgUrl: "/nft/jrny.jpeg",
    title: "Villagers of XOLO",
    url: "https://opensea.io/collection/planet-xolo-villagers?search[collections][0]=planet-xolo-villagers",
    web: "https://planetxolo.com/",
  },
  {
    id: "nft-2",
    imgUrl: "/nft/bayc.png",
    title: "Bored Ape Yacht Club",
    url: "https://opensea.io/collection/boredapeyachtclub",
    web: "https://boredapeyachtclub.com/#/",
  },
  {
    id: "nft-3",
    imgUrl: "/nft/mph.jpeg",
    title: "My Pet Hooligan",
    url: "https://opensea.io/collection/mypethooligan",
    web: "https://www.mypethooligangame.com/",
  },
  {
    id: "nft-5",
    imgUrl: "/nft/neotokyo.png",
    title: "Neo Tokyo Citizens",
    url: "https://opensea.io/collection/neotokyo-citizens",
    web: "https://neotokyo.codes/",
  },
  {
    id: "nft-4",
    imgUrl: "/nft/impostor.jpeg",
    title: "Impostors Genesis Aliens",
    url: "https://opensea.io/collection/impostors-genesis-aliens",
    web: "https://impostors.gg/",
  },
];

export const insights: Insight[] = [
  {
    imgUrl: "/planet-06.png",
    articleUrl:
      "https://www.coindesk.com/learn/what-are-nfts-and-how-do-they-work/",
    title: "What Are NFTs and How Do They Work?",
    subtitle:
      "NFTs are crypto assets that grant gamers and collectors ownership over their digital items.",
  },
  {
    imgUrl: "/planet-07.png",
    articleUrl:
      "https://www.coindesk.com/web3/4-actual-use-cases-for-blockchain-and-ai-that-are-more-than-just-hype/",
    title: "4 Actual Use Cases for Blockchain and AI",
    subtitle:
      "Blockchain and AI could be the 21st century's most culturally significant pairing that could change the way we think about creativity, identity and verification.",
  },
  {
    imgUrl: "/planet-08.png",
    articleUrl:
      "https://www.coindesk.com/web3/2023/07/06/you-can-now-buy-nfts-on-twitter-through-inspects-browser-extension/",
    title:
      "You Can Now Buy NFTs on Twitter Through Inspect's Browser Extension",
    subtitle:
      "NFT Inspect, which recently released a Chrome browser extension that analyzes NFTs used as Twitter profile pictures, is integrating MoonPay's payment solutions.",
  },
];

export const socials: Social[] = [
  {
    name: "twitter",
    url: "/socials/twitter.svg",
  },
  {
    name: "linkedin",
    url: "/socials/linkedin.svg",
  },
  {
    name: "instagram",
    url: "/socials/instagram.svg",
  },
  {
    name: "facebook",
    url: "/socials/facebook.svg",
  },
];
