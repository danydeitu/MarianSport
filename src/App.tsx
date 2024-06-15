import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Menu';

import About from './components/about/About';
;
import Mailer from './components/mailer/Mailer';
import Footer from './components/footer/Footer';
import Top from './components/top/Top';
import './App.css';

const App: React.FC = () => {
  
  return (
    <Router>
      <Top />
      <Navbar />
      <Routes>
      
        <Route path="/Nosotros" Component={About} />
        <Route path="/Contacto" Component={Mailer} />
        <Route path="/Redes" Component={Footer} />
       
      </Routes>
   
      <About/>
      <Mailer/>
      <Footer/>
    </Router>
  );
};

export default App;
