import React, { useState } from 'react';
import Products from '../product/products';

const Stores = ({ stores, onClick, id }) => {
  return (
    <div className="flex">
      <div
        data-id={id}
        onClick={onClick}
        className="mx-auto cursor-pointer"
        key={Math.random()}
      >
        {stores.store_name}
      </div>
    </div>
  );
};

export default Stores;
