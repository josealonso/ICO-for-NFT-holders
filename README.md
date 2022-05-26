## ICO (Initial Coin Offering)

- There should be a max of 10,000 CP2 tokens.
- Every Complu NFT holder should get 10 tokens for free but they would have to pay the gas fees.
- The price of one CP2 at the time of ICO should be 0.001 ether
- There should be a website which users can visit for the ICO.

Let's start building 🚀

### Commands

I had to deploy on *Mumbai* because *Rinkeby* did not work.

- `npx hardhat compile`

- `npx hardhat run scripts/deploy.ts --network mumbai`

- `npx hardhat verify 0xEF7a2Ac2D54fccd6DE27A9495a02212Ca0EFa958     0x07601386bF4a408384b14b2c2BaE1794c5B3aD51 --network mumbai`

being 0xEF7a2Ac2D54fccd6DE27A9495a02212Ca0EFa958 the contract address and  0x07601386bF4a408384b14b2c2BaE1794c5B3aD51 the NFT contract address.

