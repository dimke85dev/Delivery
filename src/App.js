import React, { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './components/pages/MainPage';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/UI/Header';
import Modal from './components/UI/Modal';
import CartContextProvider from './store/CartContextProvider';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;
