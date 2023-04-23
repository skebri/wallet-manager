import './Header.scss';

import logo from '../../assets/wp-logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img src={logo} alt="" />
        <div className="logo-text">WalletManager</div>
      </div>

      <button className="button">Go to wallet manager</button>
    </div>
  )
}
