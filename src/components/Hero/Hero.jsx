import './Hero.scss';

import discord from '../../assets/discord-icon.svg';
import twitter from '../../assets/twitter-icon.svg';
import instagram from '../../assets/instagram-icon.svg';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-features">
        <div className="hero-feature">Networks</div>
        <div className="hero-feature">Assets</div>
        <div className="hero-feature">Pools</div>
        <div className="hero-feature">Swaps</div>
      </div>

      <h1 className="hero-title">Manage Your Wallets</h1>

      <h2 className="hero-description">Deposit Analytics - Personal Alerts - Wide Search</h2>

      <div className="social">
        <div className="social-title">
          <p>Follow us for more updates.</p>
        </div>
        <div className="social-links">
          <a href="#" className="social-link">
            <img src={discord} alt="discord" />
            <div>
              <p className="social-text">Discord</p>
              <p className="social-username">@walletmanager</p>
            </div>
          </a>

          <a href="#" className="social-link">
            <img src={twitter} alt="twitter" />
            <div>
              <p className="social-text">Twitter</p>
              <p className="social-username">@walletmanager</p>
            </div>
          </a>

          <a href="#" className="social-link">
            <img src={instagram} alt="instagram" />
            <div>
              <p className="social-text">Instagram</p>
              <p className="social-username">@walletmanager</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
