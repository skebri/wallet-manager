import React from 'react';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { AboutSearch } from '../../components/AboutSearch/AboutSearch';
import './Home.scss';

export const Home = () => {
  return (
    <div className="background">
      <div className="container">
        <Header />
        <Hero />
        <AboutSearch />
      </div>
    </div>
  )
}
