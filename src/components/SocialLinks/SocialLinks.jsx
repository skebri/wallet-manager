import './SocialLinks.scss';

import discord from '../../assets/discord-icon.svg';
import twitter from '../../assets/twitter-icon.svg';
import instagram from '../../assets/instagram-icon.svg';

export const SocialLinks = () => {
  return (
    <div className="social">
      <div className="social-title">
        <p>Follow us for more updates:</p>
      </div>
      <div className="social-links">
        <a href="https://svarogdev.com" className="social-link">
          <img src={discord} alt="discord" />
          <div>
            <p className="social-text">Discord</p>
            <p className="social-username">@walletmanager</p>
          </div>
        </a>

        <a href="https://svarogdev.com" className="social-link">
          <img src={twitter} alt="twitter" />
          <div>
            <p className="social-text">Twitter</p>
            <p className="social-username">@walletmanager</p>
          </div>
        </a>

        <a href="https://svarogdev.com" className="social-link">
          <img src={instagram} alt="instagram" />
          <div>
            <p className="social-text">Instagram</p>
            <p className="social-username">@walletmanager</p>
          </div>
        </a>
      </div>
    </div>
  )
}
