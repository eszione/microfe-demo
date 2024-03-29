import './App.css';
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
        <Router />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
