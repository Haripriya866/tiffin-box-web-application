// import React from 'react';

import Header from './components/Header';
import Cuisine from './components/Cuisine';
import DiscoverPopularDishes from './components/DiscoverPopularDishes';
import Specialities from './components/Specialities';
import CustomerTestimonials from './components/CustomerTestimonials';
import FindUs from './components/FindUs';
import JoinCommunity from './components/JoinCommunity';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Cuisine />
      <DiscoverPopularDishes />
      <Specialities />
      <CustomerTestimonials />
      <FindUs />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default App;

