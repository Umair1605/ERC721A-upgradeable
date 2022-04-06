const {ethers, upgrades} = require('hardhat')
// scripts/deploy.js
async function main() {
    
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Contract...");
    const box = await upgrades.deployProxy(Box, [], { initializer: 'initialize' });
    console.log("Contract deployed to:", box.address);
    
    console.log("Token contract address: ", box.address);
    // console.log(await upgrades.erc1967.getImplementationAddress(token.address)," getImplementationAddress")
    // console.log(await upgrades.erc1967.getAdminAddress(token.address)," getAdminAddress") 
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });