import './Header.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/wp-logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img src={logo} alt="" />
        <div className="logo-text">WalletManager</div>
      </div>

      <Link to="/app" className="button">Go to wallet manager</Link>
    </div>
  )
}
