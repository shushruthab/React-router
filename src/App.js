import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Soda from './Soda';
import Item from './Items';
import Vending from './Vending';
import Chips from './Chips';
import Sardines from './Sardines';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Vending />} />
          <Route exact path='/soda' element={<Soda />} />
          <Route exact path='/chips' element={<Chips />} />
          <Route exact path='/sardines' element={<Sardines />} />
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
