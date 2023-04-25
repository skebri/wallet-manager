import { MagicSearch } from "../MagicSearch/MagicSearch";
import { AccountButton } from "../AccountButton/AccountButton";
import { Notifications } from "../Notifications/Notifications";

import './AccountBar.scss';

export const AccountBar = () => {
  return (
    <div className="account-bar">
      <MagicSearch />

      <Notifications />

      <AccountButton />
    </div>
  )
}
