import React from 'react';

const Products = ({ product }) => {
  const addToCartHandler = () => {};
  return (
    <div className="">
      <div
        key={Math.random()}
        className="flex flex-col gap-3 bg-white rounded-xl p-6 border-solid border border-gray-600 shadow-lg shadow-blue-800/40   "
      >
        <img
          src="fastfoode.jpg"
          alt="food"
          className=" h-17 w-14 rounded-xl mx-auto"
        ></img>
        <div className="text-center">{product.name}</div>
        <div className="text-center">{product.price}.00 $</div>
        <button
          onClick={addToCartHandler}
          className="hover:bg-red-300 hover:text-yellow-300 border-solid border px-3 py-1 border-gray-600 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
