import React, { useContext } from 'react';
import styles from '../pages/Main.module.css';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';

const Header = () => {
  const { items } = useContext(CartContext);

  // if (!items.length) return;
  const cartItemsNumber = items.reduce(
    (currentValue, item) => currentValue + item.amount,
    0
  );

  return (
    <div className=" bg-purple-400 py-5">
      <div
        className={
          'w-2/3 mx-auto flex justify-between px-6 items-center ' +
          styles.mobile
        }
      >
        <ul className="flex gap-5">
          <li className="text-xl  hover:text-yellow-400 cursor-pointer">
            <Link to={'/'}>Shops</Link>
          </li>
          <span>|</span>
          <li className="text-xl flex gap-3 hover:text-yellow-400 cursor-pointer">
            <Link to={'/cart'}>Shopping Cart</Link>
            <div className="flex  w-7 h-7 items-center  border-2 border-blue-300 rounded-full">
              <p className="mx-auto text-sm">{cartItemsNumber}</p>
            </div>
          </li>
        </ul>
        <h1 className=" text-xl text-blue-700">Food order</h1>
      </div>
    </div>
  );
};

export default Header;
