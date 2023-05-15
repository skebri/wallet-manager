import { useState, useEffect } from 'react';
import { getWalletAddressList } from '../../services/apiService';

import './AddressList.scss';

export const AddressList = () => {
  const [addressList, setAddressList] = useState([])

  const getApiData = async () => {
    const data = await getWalletAddressList();

    setAddressList(data.walletAddresses)

    console.log('wallet-data', data);
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <div className="address-list-component">
      {
        addressList &&
        (
          <div className="address-list">
            {
              addressList.map((wallet) =>
              <div key={wallet.address} className="address-list-row">
                <div className="address-list-row-item-wallet">{wallet.walletType}</div>
                <div className="address-list-row-item-address">{wallet.address}</div>
                <div className="address-list-row-item-network">{wallet.network}</div>
              </div>
            )
            }
          </div>
        )
      }
    </div>
  )
}
