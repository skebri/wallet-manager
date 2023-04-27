import { ConnectButton } from '../ConnectButton/ConnectButton';

import accountIcon from '../../assets/account-icon.png';

import './AccountButton.scss';

export const AccountButton = () => {

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
