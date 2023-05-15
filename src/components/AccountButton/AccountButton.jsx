import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '../ConnectButton/ConnectButton';
import { registerUser } from '../../services/apiService';

import accountIcon from '../../assets/account-icon.png';

import './AccountButton.scss';

export const AccountButton = () => {
  const {connector, address} = useAccount();

  const register = useCallback(async () => {
      try {
        const result = await registerUser(address, connector?.name)

      } catch (err) {

      }
    }, [connector?.name, address])

  useEffect(() => {
    if (address && connector?.name) {
      register()
    }
  }, [address, connector?.name])

  return (
    <div className="account-button">
      <div className="account-image">
        <img src={accountIcon} alt="AccountIcon" />
      </div>

      <div className="account-options">
        <ConnectButton />
      </div>
    </div>
  )
}
