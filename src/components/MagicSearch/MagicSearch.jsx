import searchIcon from '../../assets/search-icon-indicator.svg';
import cmdIcon from '../../assets/cmd-icon.svg';

import './MagicSearch.scss';

export const MagicSearch = () => {
  return (
    <div className="search-wrapper">
      <div className="input-wrapper">
        <img src={searchIcon} alt="Search" />
        Search...
      </div>

      <div className="search-options">
        <img src={cmdIcon} alt="Cmd" />
        <div className="help">?</div>
      </div>
    </div>
  )
}
