import './App.css';
import Data from './components/Data/Data';
import { useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Child  from './components/Child1/Child';

function App() {
  return (
    <div>
      <Header />
      <div className="app-body">
        <Sidebar />
        <div className="app-right-content">
          <Data />
          <Child className="app-child1" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
