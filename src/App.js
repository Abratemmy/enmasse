import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Navigation from './components/Navigation/Navigation';
import Router from './router';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
