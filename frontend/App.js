// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import GenQuiz from './components/GenQuiz';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <GenQuiz />
      <Footer />
    </div>
  );
}

export default App;
