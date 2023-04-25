import { AccountBar } from "../../components/AccountBar/AccountBar";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import './App.css';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />

      <div className="app-render">
        <AccountBar />
      </div>
    </div>
  );
}
