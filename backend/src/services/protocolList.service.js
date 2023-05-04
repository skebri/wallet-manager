const Web3 = require('web3')
const cEthAbi = require('../utils/cEthAbi')
const { cTokenAddresses } = require('../configs/contractAddresses.js')

const getAllProtocols = async () => {
  const allProtocols = [
    await getCompound()
  ]

  return allProtocols
}

const getCompound = async () => {
  const ethMantissa = 1e18;
  const blocksPerDay = 7200; // 12 seconds per block
  const daysPerYear = 365;
  const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/8b8cdc2c5d2943efabd5ec9e8d8bf1d8'));

  const cToken = new web3.eth.Contract(cEthAbi, cTokenAddresses.cETH);
  const supplyRatePerBlock = await cToken.methods.supplyRatePerBlock().call();
  const borrowRatePerBlock = await cToken.methods.borrowRatePerBlock().call();
  const supplyApy = (((Math.pow((supplyRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear))) - 1) * 100;
  const borrowApy = (((Math.pow((borrowRatePerBlock / ethMantissa * blocksPerDay) + 1, daysPerYear))) - 1) * 100;
  console.log(`Supply APY for ETH ${supplyApy} %`);
  console.log(`Borrow APY for ETH ${borrowApy} %`);

  return {
    apy: supplyApy,
    tvl: '200000',
    name: 'cETH'
  }
}

module.exports = {
  getAllProtocols,
}
