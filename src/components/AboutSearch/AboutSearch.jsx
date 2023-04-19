import './AboutSearch.scss';

import mm_icon from '../../assets/mm-icon.svg';
import bp from '../../assets/benfit-bulletpoint.svg';

const walletManagerBenefitsLeft = ['No more juggling multiple apps', 'Easy asset management', 'Powerful analytics'];
const walletManagerBenefitsRight = ['Secure connections', 'One-click trading', 'Custom Alerts'];

export const AboutSearch = () => {
  return (
    <div className="about-search">
      <h2>Wallet Accounts Manager</h2>

      <div>
        <p>
          We provide You an easy option to connect all of Your wallet accounts.
          <br></br>
          With just a few clicks, you can link your wallets and exchanges to <span>Wallet Manager</span> and enjoy a streamlined experience that makes it easy to manage your assets. Whether you're a seasoned crypto trader or just getting started, <span>Wallet Manager</span> is the perfect tool to help you stay on top of your investments.
          <br></br>
          Please reach out to us if you have any thoughts, praise, or custom need to <a href="mailto:hello@wmanager.com">hello@wmanager.com</a>. We’d love to hear from you!
        </p>

        <img src={mm_icon} alt="mm_icon" />
      </div>

      <div className="serch-benefits-wrapper">
        <div className="search-benefits-left">
          {
            walletManagerBenefitsLeft.map((value) => (
              <div className="benefit">
                <img src={bp} alt="bulletpoint" />
                <div className="benefit-text">{value}</div>
              </div>
            ))
          }
        </div>

        <div className="search-benefits-right">
          {
            walletManagerBenefitsRight.map((value) => (
              <div className="benefit">
                <div className="benefit-text">{value}</div>
                <img src={bp} alt="bulletpoint" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
