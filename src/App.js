import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './components/pages/MainPage';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/UI/Header';

function App() {
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
}

export default App;
