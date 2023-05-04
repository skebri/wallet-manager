import { AccountBar } from "../../components/AccountBar/AccountBar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ProtocolList } from "../../components/ProtocolList/ProtocolList";
import { LandingPoolComponent } from "../../components/LandingPoolComponent/LandingPoolComponent";
import { Outlet } from 'react-router-dom';

import './App.css';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />

      <div className="app-render">
        <AccountBar />

        <div className="app-render-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
