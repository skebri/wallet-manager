import { MagicSearch } from "../MagicSearch/MagicSearch";
import { AccountButton } from "../AccountButton/AccountButton";
import { Notifications } from "../Notifications/Notifications";

import './AccountBar.scss';

export const AccountBar = () => {
  return (
    <div className="account-bar">
      <MagicSearch />

      <div className="account-actions">
        <Notifications />

        <AccountButton />
      </div>
    </div>
  )
}
