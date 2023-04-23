import React from 'react';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { AboutWalletManager } from '../../components/AboutWalletManager/AboutWalletManager';
import { AboutSearch } from '../../components/AboutSearch/AboutSearch';
import { PayAttention } from '../../components/PayAttention/PayAttention';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';
import './Home.scss';

export const Home = () => {
  return (
    <div className="background">
      <div className="container">
        <Header />
        <Hero />
        <SocialLinks />
        <AboutWalletManager />
        <AboutSearch />
        <PayAttention />
        <SocialLinks />
      </div>
    </div>
  )
}
