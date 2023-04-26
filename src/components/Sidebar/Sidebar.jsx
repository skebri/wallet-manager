import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import logo from '../../assets/wp-logo.svg';
import expander from '../../assets/expander-icon.svg';
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

          <div className="menu-item">
            <img src={dashboard} className="menu-icon" alt="DashIcon" />
            <div className="menu-item-title">Dashboard</div>
          </div>
        </div>

        <div className="sidebar-menu">
          <div className="sidebar-title">Tools</div>

          <div className="menu-item">
            <img src={explore} alt="DashIcon" />
            <div className="menu-item-title">Explore</div>
          </div>
        </div>

        <div className="sidebar-actions">
          <div className="menu-item">
            <img src={settings} alt="DashIcon" />
            <div className="menu-item-title">Settings</div>
          </div>

          <div className="menu-item">
            <img src={help} alt="DashIcon" />
            <div className="menu-item-title">Get Help</div>
          </div>
        </div>
      </div>
    </div>
  )
);
