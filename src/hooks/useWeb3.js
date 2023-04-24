import { useState } from 'react';
import Web3 from 'web3';
import { CONTRACT_ADDRESSES } from "../env/config";
import balanceReaderABI from "../abi/balanceReaderABI.json";

const BALANCE_READER_ADDRESS = '0xa09553E8950728cD1017F2C9F90Ce1963cff8581';

export const useWeb3 = () => {
  const [address, setAddress] = useState('')
  const [provider, setProvider] = useState()
  const [web3, setWeb3] = useState()
  const [balance, setBalance] = useState(0)
  const [balances, setBalances] = useState([])

  const connect = async () => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });

    setAddress(account)
    setProvider(window.ethereum)
    setWeb3(new Web3(window.ethereum))
  }

  const disconnect = () => {
    setAddress('')
    setProvider(undefined)
    setBalance(0)
  }

  const getBalance = async () => {
    const balance = await web3.eth.getBalance(address)
    const parseBalance = web3.utils.fromWei(balance)
    setBalance(parseBalance)
  }

  const getERC20Balances = async () => {
    const tokens = CONTRACT_ADDRESSES.map((token) => token.address)
    const balanceReaderContract = new web3.eth.Contract(balanceReaderABI, BALANCE_READER_ADDRESS, {
      from: address, // default from address
    });

    const result = await balanceReaderContract.methods.allBalances(tokens, address)
      .call({from: address})

    const balances = CONTRACT_ADDRESSES.map((token, index) => {
      const balance = result[index] / 10 ** token.decimals

      return {
        name: token.name,
        balance,
        price: 100,
      }
    })
    setBalances(balances)
  }

  return {
    address,
    balance,
    balances,
    getERC20Balances,
    getBalance,
    connect,
    disconnect
  }
}
