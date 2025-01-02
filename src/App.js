
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import Contacts from './Components/pages/Contacts';
import About from './Components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component = {Home} />
          <Route path='/Products' Component={Products} />
          <Route path='/Abouts' Component={About} />
          <Route path='/Contacts' Component={Contacts} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
