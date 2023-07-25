const { ethers, upgrades } = require('hardhat')

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log(`Deploying contract with the account: ${deployer.address}`)

  // We get the contract to deploy
  const PollyComponent = await ethers.getContractFactory('PollyComponentToken')
  console.log('Deploying contract PollyComponentToken...')

  if (process.env.CONTRACT_ADDRESS) {
    const contract = await upgrades.upgradeProxy(process.env.CONTRACT_ADDRESS, PollyComponent)
    console.log('Contract updated:', contract.address)
  } else {
    const contract = await upgrades.deployProxy(PollyComponent)
    await contract.deployed()
    console.log('Contract deployed to:', contract.address)
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
