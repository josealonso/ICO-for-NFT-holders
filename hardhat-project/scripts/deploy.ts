import { ethers } from "hardhat";
import { config } from "dotenv";
import { COMPLU_NFT_CONTRACT_ADDRESS_ON_MUMBAI } from "../constants";

config({ path: ".env" });

async function main() {
  const compluNFTContract = COMPLU_NFT_CONTRACT_ADDRESS_ON_MUMBAI;
  const tokensContract = await ethers.getContractFactory("CompluToken");
  const deployedTokensContract = await tokensContract.deploy(compluNFTContract);
  // const deployedTokensContract = await tokensContract.deploy(tokensContract);
  // print the address of the deployed contract
  console.log("Complu Tokens Contract Address: ", deployedTokensContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
