import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/wp-logo.svg';
import dashboard from '../../assets/dashboard-icon.svg';
import explore from '../../assets/explore-icon.svg';
import settings from '../../assets/settings-icon.svg';
import help from '../../assets/help-icon.svg';


import './Sidebar.scss';

export const Sidebar = () => (
  (
    <div className="sidebar">
      <div className="logo-wrapper">
        <Link to="/" className="home-link">
          <img src={logo} className="logo" alt="LogoWM" />
        </Link>
      </div>

      <div className="sidebar-navigation">
        <div className="sidebar-menu">
          <div className="sidebar-title">Menu</div>

          <NavLink to="/app" className="menu-item">
            <img className="menu-item-icon" src={dashboard} alt="DashIcon" />
            <div className="menu-item-title">Dashboard</div>
          </NavLink>
        </div>

        <div className="sidebar-menu">
          <div className="sidebar-title">Tools</div>

          <NavLink to="/app/explore" className="menu-item">
            <img src={explore} alt="DashIcon" />
            <div className="menu-item-title">Explore</div>
          </NavLink>
        </div>

        <div className="sidebar-actions">
          <NavLink to="/app/settings" className="menu-item">
            <img src={settings} alt="DashIcon" />
            <div className="menu-item-title">Settings</div>
          </NavLink>

          <NavLink to="/app/help" className="menu-item">
            <img src={help} alt="DashIcon" />
            <div className="menu-item-title">Get Help</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
);
