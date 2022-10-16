# charity_solana

This is an command line app which accesses my Solana wallet using the marvelous Orca SDK. 
It determines how much SOL I'm currently holding and prompts me to donate to specific charities.
In it, we interact with a Solana RPC endpoint, pi.devnet.solana.com. The SOL balance is gathered using Connection's getBalance, and is converted from lamports units (internal measure) to SOL. We use the Token class's createTransferCheckedInstruction metod to create an instruction to send a token, and we obtain the relevant token account address with derivateATA().

If you want to make this app compatible with your wallet, you will need to delete the wallet.json and generate your own using the (official documentation)[https://orca-so.gitbook.io/orca-developer-portal/whirlpools/tour-de-whirlpool-tutorial/setting-up-your-environment].

# Prereqs.
To prepare to use this CL app, you will need the following installed:
- Node (version 16.8.0 or later)
- npm (7.20.0 or later)
- ts-node (v10.7.0 or later)
- solana-cli (version 1.10.8 or later)

# To run
- git clone this repository
- npm install
- ts-node ./src/charity_tok.ts

## Demo available
https://imgur.com/a/eaim7fV 


I found the information about the charities from the following sources:
- https://shelterstoshutters.org/
- https://www.haverford.edu/
- https://tcaz.org/
- https://www.7lakesalliance.org/
- https://www.givedirectly.org/
- https://www.animalleague.org/

The project was inspired by philosophies derived from the following:
- https://www.effectivealtruism.org/
- https://www.givewell.org/
- https://solana.com
- https://www.nytimes.com/2022/08/05/opinion/the-case-for-longtermism.html
- https://www.cambridge.org/core/journals/ethics-and-international-affairs/article/lessons-of-effective-altruism/0C716CFD3FDCAF7BBC2CE99384C9B3F2
