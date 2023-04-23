import './PayAttention.scss';

import walletIcon from '../../assets/wallet-icon.svg';
import searchIcon from '../../assets/search-icon.svg';
import alertIcon from '../../assets/alert-icon.svg';

const payAttentionFields = [
  {
    index: '1',
    icon: walletIcon,
    description: <div>To check Wallet Manager options, please <span>Connect</span> Your wallet and Sign.</div>,
  },
  {
    index: '2',
    icon: searchIcon,
    description: 'To be sure how to use Search go to our search guide.',
  },
  {
    index: '2',
    icon: alertIcon,
    description: 'To setup Your custom alerts check our alerts guide.',
  }
]

export const PayAttention = () => {
  return (
    <div className="pay-attention-wrapper">
      <h2 className="pay-attention-title">Please pay attention! &#128075;</h2>

      <div className="pay-attention-fields">
        {
          payAttentionFields.map((field) => (
            <div className="field">
              <div className="field-marks">
                <img src={field.icon} alt="" />
                <div className="field-index">{field.index}</div>
              </div>

              <p>{field.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
