
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Menu';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
     
    </Router>
  );
};

export default App;
