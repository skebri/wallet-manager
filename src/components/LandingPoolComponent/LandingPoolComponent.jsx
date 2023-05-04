import ethTicker from '../../assets/eth-ticker.svg';
import { ProtocolList } from '../ProtocolList/ProtocolList';

import './LandingPoolComponent.scss';

export const LandingPoolComponent = () => {
  return (
    <div className="landing-pool-component">
      <div className="landing-pool-title">POOL NAME</div>

      <img src={ethTicker} className="landing-pool-token-ticker" />

      <div className="landing-pool-image"></div>

      <ProtocolList />
    </div>
  )
}
