export const projectData = [
    {
        title: "Custom NFT",
        description:
            `This project features two custom ERC721 NFT implementations built with Solidity. The Basic NFT allows for
            sequential minting of tokens, each with a fixed image URI stored on IPFS for decentralized and permanent storage.
            The Mood NFT enables owners to toggle between two mood states, with dynamic SVG images
            encoded and stored directly on-chain. Both implementations include deployment scripts for multiple networks, and demonstrate the use of decentralized storage
            solutions for NFT assets.`,
        technologies: ["Foundry", "Solidity", "IPFS", "SVG Encoding", "Openzeppelin"],
        caseStudy: "#",
        sourceCode: "https://github.com/iamfadhlu/erc721-foundry",
        image: "/assets/images/ap.jpg",
    },
    {
        title: "Custom ERC20 Token",
        description:
            `This project features a custom ERC20 token implementation built with Solidity, utilizing the Foundry framework for
            testing. It includes a standard ERC20 token contract, deployment scripts for multiple networks, and a comprehensive
            test suite to ensure functionality and security`,
        technologies: ["Foundry", "Solidity", "Openzeppelin"],
        caseStudy: "#",
        sourceCode: "https://github.com/iamfadhlu/erc20-token",
        image: "/assets/images/retweet.jpg",
    },
    {
        title: "Raffle",
        description:
            `The Raffle project is a modular, gas-efficient smart contract for creating secure, verifiable raffles on
            Ethereum-compatible blockchains. It integrates Chainlink VRF for random number generation and Chainlink Keepers
            for automated raffle draws. The project is designed for maintainability, with separate contracts for each component,
            and optimized for low gas usage. Key features include secure randomness, automated execution, and comprehensive
            testing. This project demonstrates how to build trustless, transparent raffles using Chainlink’s decentralized oracle
            services.`,
        technologies: ["Foundry", "Solidity", "Chainlink VRF", "Chainlink Automation"],
        caseStudy: "#",
        sourceCode: "https://github.com/iamfadhlu/foundry-lottery",
        image: "/assets/images/sd.jpg",
    },

    {
        title: "Decorvista",
        description:
            "An e-commerce platform that allows users to shop for home design appliances and connect with interior designers, creating a collaborative space to showcase and explore innovative designs.",
        technologies: ["React", "Bootstrap", "Javascript", "Express.js", "MongoDb"],
        livePreview: "https://decorvista.vercel.app/",
        caseStudy: "#",
        sourceCode: "https://github.com/somkenemuscle/decorvista",
        image: "/assets/images/decor.jpg",
    },

];
