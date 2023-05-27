import React from 'react';
import styles from './Store.module.css';

const Stores = ({ stores, onClick, id, disabled, className }) => {
  const isActive = ` mx-auto cursor-pointer ${className} ${
    disabled ? '' : styles.disabled
  }`;

  return (
    <div className="flex">
      <div
        data-id={id}
        onClick={onClick}
        className={isActive}
        key={Math.random()}
      >
        {stores.store_name}
      </div>
    </div>
  );
};

export default Stores;
