import React, { useContext, useState } from 'react';
import styles from '../pages/Main.module.css';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = () => {
  const { addItem, items } = useContext(CartContext);
  const [amountInput, setAmountInput] = useState(0);

  const removeAmountHandler = () => {
    if (!amountInput) return;
    setAmountInput(amountInput - 1);
  };

  const addAmountHandler = () => {
    setAmountInput(amountInput + 1);
  };

  const productItemCart = items.map((product) => {
    return (
      <div
        id={product.id}
        key={product.id}
        className={
          'flex justify-between items-center bg-white rounded-xl p-6 border-solid border border-gray-600 shadow-lg shadow-blue-800/40 ' +
          styles.mobile
        }
      >
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <div className="flex items-center gap-2">
          <input
            value={amountInput}
            className="w-10 p-1 text-center border border-gray-300 rounded-lg text-base transition duration-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          />
          <span
            onClick={removeAmountHandler}
            className="hover:bg-slate-400 hover:text-white cursor-pointer h-7 w-7 text-center border border-gray-950  rounded-full"
          >
            -
          </span>
          <span
            onClick={addAmountHandler}
            className=" h-7 w-7 text-center border border-gray-950 cursor-pointer rounded-full hover:bg-slate-400 hover:text-white"
          >
            +
          </span>
        </div>
      </div>
    );
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={'w-2/3 flex flex-col p-3 gap-5 mx-auto ' + styles.mobile}
    >
      <div className={'flex gap-3 ' + styles.mobile}>
        <div
          className={
            'w-2/5 mx-auto flex flex-col gap border-solid border-2 p-5 border-gray-600 rounded-xl shadow-xl shadow-gray-800/50 ' +
            styles.mobile
          }
        >
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg text-base transition duration-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="Введите текст"
            />
          </div>

          <div className={'flex flex-col gap-2'}>
            <label>Email</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg text-base transition duration-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="Введите текст"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Phone</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg text-base transition duration-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="Введите текст"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Adress</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg text-base transition duration-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="Введите текст"
            />
          </div>
        </div>
        <div
          className={
            'flex flex-col mx-auto gap-2 w-3/5 border-solid border-2 border-gray-600 rounded-xl shadow-xl shadow-gray-800/40  p-5 ' +
            styles.mobile
          }
        >
          {productItemCart}
        </div>
      </div>
      <div className="flex gap-7 items-center justify-end">
        <span className="">Total price:</span>
        <span className="">
          {items.reduce((acc, item) => acc + item.price, 0)}.00
        </span>
        <div className="flex gap-5">
          <button
            className="border-solid border-2 hover:bg-slate-400 hover:text-white border-gray-500 rounded-xl shadow-lg shadow-gray-600/50  px-3 py-1"
            type="button"
          >
            Submit
          </button>
          <Link
            to="/"
            className="border-solid border-2 hover:bg-yellow-300 hover:text-red-800 border-gray-500 rounded-xl shadow-lg shadow-gray-600/50  px-3 py-1"
            type="button"
          >
            Close
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Cart;
