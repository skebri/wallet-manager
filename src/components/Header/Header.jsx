import './Header.scss';

import logo from '../../assets/wp-logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <button className="button">Go to wallet manager</button>
    </div>
  )
}
