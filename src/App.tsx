import './App.css';
import Data from './components/Data/Data';
import { useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-body">
        <Sidebar />
        <div className="app-right-content">
          <Router />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
