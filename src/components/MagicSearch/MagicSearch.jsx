import searchIcon from '../../assets/search-icon-indicator.svg';
import cmdIcon from '../../assets/cmd-icon.svg';
import stakingIcon from '../../assets/staking-icon.svg';

import './MagicSearch.scss';

export const MagicSearch = () => {
  const searchShortcuts = [
    {
      icon: stakingIcon,
      cmd: 'ST',
      name: 'Staking'
    },
    {
      icon: stakingIcon,
      cmd: 'LA',
      name: 'Landing'
    },
    {
      icon: stakingIcon,
      cmd: 'YF',
      name: 'Yield'
    },
    {
      icon: stakingIcon,
      cmd: 'LST',
      name: 'Liq ST'
    },
    {
      icon: stakingIcon,
      cmd: 'CO',
      name: 'Company'
    },
    {
      icon: stakingIcon,
      cmd: 'UP',
      name: 'Upcoming'
    },
    {
      icon: stakingIcon,
      cmd: 'POST',
      name: 'Posts'
    },
    {
      icon: stakingIcon,
      cmd: 'HOT',
      name: 'Hot'
    },
    {
      icon: stakingIcon,
      cmd: 'REF',
      name: 'Refferable'
    },
    {
      icon: stakingIcon,
      cmd: '>',
      name: 'Higher'
    },
    {
      icon: stakingIcon,
      cmd: '<',
      name: 'Lower'
    },
    {
      icon: stakingIcon,
      cmd: '=',
      name: 'Equal'
    }
  ]

  return (
    <div className="search-wrapper">
      <div className="input-wrapper">
        <img src={searchIcon} alt="Search" />
        <input type="text" placeholder="Search..." />
      </div>

      <div id="options" className="search-options">
        <button className="search-cmd-wrapper">
          <div className="cmd-list">
            <div className="cmd-list-explain">
              <div className="explain-title">Shortcut Legend</div>

              <div className="explain-description">This is a legend with shortcuts, buy entering them You can filter through Explore.</div>
            </div>
            {
              searchShortcuts && searchShortcuts.map(shortcut => (
                <div className="cmd-item">
                  <img src={shortcut.icon} className="cmd-icon" />

                  <div className="cmd-content">
                    <div className="cmd-shortcut">{shortcut.cmd}</div>
                    <div className="cmd-name">{shortcut.name}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </button>

        <img src={cmdIcon} alt="Cmd" />

        <div className="help">?</div>
      </div>
    </div>
  )
}
