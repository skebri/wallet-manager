import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import './styles/main.scss';
import './index.css';
import { App } from './pages/App/App';
import { Home } from './pages/Home/Home';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from './services/rainbowService.js';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import  { Explore } from './components/Explore/Explore';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/app",
    element: <App />,
    children: [
       {
         path: '',
         element: <div>Dashboard</div>,
       },
       {
         path: 'explore',
         element: <Explore />,
       },
       {
         path: 'settings',
         element: <div>Settings</div>,
       },
       {
         path: 'help',
         element: <div>Help</div>,
       },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
            theme={darkTheme({
              accentColor: '#86D7B0',
              accentColorForeground: '#0CAF60',
            })}
           chains={chains}>
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
