import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContatiner';

function App() {

  return (
    <div className='App App-header'>
      <PortfolioContainer></PortfolioContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
