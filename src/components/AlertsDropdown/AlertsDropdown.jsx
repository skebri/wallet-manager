import { useCallback, useState } from 'react';
import bell from "../../assets/alerts-bell.svg"

import './AlertsDropdown.scss';

export const AlertsDropdown = () => {
  const alerts = [
    {
      icon: 'icon',
      message: 'This is an alert message that will be displayed in item.',
      status: 'Important'
    },
    {
      icon: 'icon',
      message: 'This is an alert message that will be displayed in item.',
      status: 'Attention'
    },
    {
      icon: 'icon',
      message: 'This is an alert message that will be displayed in item.',
      status: 'Warning'
    },
  ]

  const [ alertList, setAlertList] = useState(false);

  const toggleAlertList = useCallback(() => setAlertList(!alertList), [alertList]);

  return (
    <div className="alerts-dropdown">
      <button onClick={toggleAlertList} className="alert-button">
        <img src={bell} alt="BellIcon" />
      </button>

      {
        alertList &&
        (
          <div className="alerts-list">
            <div className="alerts-list-title">Alerts</div>

            <div className="alers-wrapper">
              {
                alerts && alerts.map(alert => (
                  <div className="alert-item">
                    <div className="alert-icon">{alert.icon}</div>

                    <div className="alert-info">
                      <div className="alert-message">{alert.message}</div>
                      <div className="alert-status">{alert.status}</div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}
