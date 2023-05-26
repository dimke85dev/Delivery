import React from 'react';

const Cart = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col w-2/3 p-3 gap-5 mx-auto"
    >
      <div className="flex gap-3 ">
        <div className="w-2/5 flex flex-col gap border-solid border-2 p-5 border-gray-600 rounded-xl shadow-xl shadow-gray-800/50 ">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg text-base transition duration-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="Введите текст"
            />
          </div>

          <div className="flex flex-col gap-2">
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
        <div className="w-3/5 border-solid border-2 border-gray-600 rounded-xl shadow-xl shadow-gray-800/40  p-5">
          asdgkdjasgkdjgh
        </div>
      </div>
      <div className="flex gap-7 items-center justify-end">
        <span className="">Total price: 9999</span>
        <button
          className="border-solid border-2 hover:bg-slate-400 hover:text-green-400 border-gray-500 rounded-xl shadow-lg shadow-gray-600/50  px-3 py-1"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Cart;
