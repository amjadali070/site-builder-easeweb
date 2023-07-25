require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/3c661043f063496f87cfd2fac474839d',
      accounts: ['de42a6a28863c4cc3ef05ec9e8febb069de03e69feb7f040741d2e60bac14457']
    }
  },
  solidity: {
    version: '0.8.9'
  }
}
