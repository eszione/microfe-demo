import './App.css';
import Data from './components/Data/Data';
import { useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

// @ts-ignore
const child = import('MicroFeChild/MicroFeChild');

function App() {
  const ref = useRef(null);

  useEffect(() => {
    child.then(fc => {
      fc.mount(ref.current);
    });
  }, [child]);

  return (
    <div>
      <Header />
      <div className="app-body">
        <Sidebar />
        <div className="app-right-content">
          <Data />
          <div className="app-child" ref={ref} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
