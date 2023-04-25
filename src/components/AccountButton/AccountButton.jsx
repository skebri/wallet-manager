import accountIcon from '../../assets/account-icon.png';

import './AccountButton.scss';

export const AccountButton = () => {
  return (
    <div className="account-button">
      <div className="account-image">
        <img src={accountIcon} alt="AccountIcon" />
      </div>

      <div className="account-options">
        <div className="account-select">0x450...75Bc</div>
        <div className="network-select">Ethereum</div>
      </div>
    </div>
  )
}
