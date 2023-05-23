import logo from './logo.svg';
import './App.css';
import Data from './components/Data';
//import { mount } from 'MicroFeChild/MicroFeChild';
import { useEffect, useRef } from 'react';

// @ts-ignore
const m = import('MicroFeChild/MicroFeChild');

function App() {
  const ref = useRef(null);

  useEffect(() => {
    m.then(x => {
      x.mount(ref.current);
    });
  }, [m]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Data />
        <div ref={ref} />
      </header>
    </div>
  );
}

export default App;
