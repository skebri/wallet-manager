import { useState, useCallback } from 'react';
import { AddressList } from '../AddressList/AddressList';

import expandIcon from '../../assets/expand.svg';
import colapseIcon from '../../assets/colapse.svg';
import './WalletManagerWidget.scss';

export const WalletManagerWidget = () => {
  const [expander, setExpander] = useState(true);

  const expand = useCallback(() => setExpander(!expander), [expander]);

  return (
    <div className="wallet-manager-widget">
      <div className="wallet-manager-widget-title">
        WalletManager

        <button onClick={expand} className="expander">
          {
            expander &&
            (
              <img src={expandIcon} className="expander-icon" alt="Expander" />
            )
          }
          {
            !expander &&
            (
              <img src={colapseIcon} className="expander-icon" alt="Colapse" />
            )
          }
        </button>
      </div>

      {
        !expander &&
        (
          <div className="wallet-widget-address-input-wrapper">
            <input type="text" className="wallet-widget-address-input" placeholder="Enter address..." />

            <button className="wallet-widget-address-add-button">Add</button>
          </div>
        )
      }

      <div className="wallet-manager-table">
        <div className="wallet-manager-widget-column-titles">
          <div className="wallet-manager-widget-column-title-item">Wallet</div>
          <div className="wallet-manager-widget-title-item">Address</div>
          <div className="wallet-manager-widget-title-item"></div>
        </div>

        <AddressList />
      </div>
    </div>
  )
}
