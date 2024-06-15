import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Menu';

import About from './components/about/About';
;
import Mailer from './components/mailer/Mailer';
import Footer from './components/footer/Footer';
import Top from './components/top/Top';

import './App.css';
import MapComponent from './components/MapComponent';
const App: React.FC = () => {
  
  return (
    <Router>
      <Top />
      <Navbar />
   
      <Routes>
      
        <Route path="/Nosotros" Component={About} />
        <Route path="/Contacto" Component={Mailer} />
        <Route path="/Redes" Component={Footer} />
        <Route path="/ubicacion" Component={MapComponent} />
      </Routes>
   
      <About/>
      <Mailer/>
      <MapComponent/>
      <Footer/>
    </Router>
  );
};

export default App;
