import { useState, useEffect } from 'react';
import { useWeb3 } from "../../hooks/useWeb3";
import './App.css';

export const App = () => {
  const { address, balance, balances, disconnect, connect, getBalance, getERC20Balances } = useWeb3()

  useEffect(() => {
    if (address) {
      getBalance()
      getERC20Balances()
    }
  }, [address])

  return (
    <div className="app-wrapper">
      {address}
      <br/>
      {parseFloat(balance).toFixed(2)} ETH

      {
        balances.length > 0 &&
          balances.map((({balance, price, name}) =>
          <div className="balance">
            <div className="balance-name">Token Name: {name}</div>
            <div className="balance-value">Value: $ {price * balance}</div>
            <div className="balance-amount">Amount: {balance}</div>
          </div>
        ))
      }

      {
        !address ?
        <button onClick={connect}>
          Connect a wallet
        </button>
        :
        <button onClick={disconnect}>
          Disconnect
        </button>
      }
    </div>
  );
}
