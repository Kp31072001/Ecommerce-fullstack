import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList'
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
