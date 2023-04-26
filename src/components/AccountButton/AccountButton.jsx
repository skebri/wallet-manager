import { useDispatch, useSelector } from 'react-redux';
import { connectWallet } from '../../features/walletSlice';
import { selectAddress } from '../../selectors/walletSelector';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import accountIcon from '../../assets/account-icon.png';

import './AccountButton.scss';

export const AccountButton = () => {
  const dispatch = useDispatch()
  const address = useSelector(selectAddress)

  const connectWalletAction = () => {
    dispatch(connectWallet({ address: '0x0' }))
  }

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
