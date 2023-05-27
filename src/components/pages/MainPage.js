import Stores from '../../components/pages/Stors';

import Loader from '../../components/UI/Loader';
import axios, { AxiosError } from 'axios';
import { Fragment, useEffect, useState } from 'react';
import Products from '../../components/product/products';
import Header from '../../components/UI/Header';

function Main() {
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [storeName, setStoreName] = useState('');
  const [showProducts, setShowProducts] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [activeStors, setActiveStors] = useState(true);

  const showProductsHandler = (e) => {
    const store = stores.find((el) => el._id === e.target.dataset.id);

    setProducts(store.products);
    setStoreName(store.store_name);

    setShowProducts(true);
    setActiveStors(false);
  };
  const fetchStore = async () => {
    try {
      setIsLoading(true);
      // const response = await axios.get('http://localhost:2000/api/stores');
      const response = await axios.get(
        'https://delivery-back.vercel.app/api/stores'
      );

      setStores(response.data);
      const firstStore = response.data.find(
        (el) => el._id === '6470cc9e41d0788d33650278'
      );
      setProducts(firstStore.products);
      setStoreName(firstStore.store_name);

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchStore();
  }, []);

  if (!stores.length) return <Loader />;

  const storeItems = stores.map((store) => (
    <div key={store._id}>
      <Stores
        disabled={activeStors}
        onClick={showProductsHandler}
        id={store._id}
        showProducts={showProducts}
        stores={store}
        className="px-4 py-1 tetx-sm border-solid border-2 hover:bg-slate-400 hover:text-white border-gray-600 rounded-xl shadow-lg shadow-blue-800/60 "
      />
    </div>
  ));

  const productsItems = products?.map((product) => (
    <Products key={Math.random()} product={product} />
  ));

  return (
    <div className="w-2/3 mx-auto">
      <div className="mx-auto flex gap-4 p-5">
        <div className="w-1/3 flex flex-col justify-between gap-6 p-5 border-solid border-2 border-gray-600 rounded-xl shadow-xl shadow-green-800/80 ">
          <div className="flex flex-col gap-7  ">{storeItems}</div>
          <button
            className="hover:bg-slate-400 hover:text-white px-2 py-1 mx-auto border-solid border-2 border-gray-600 rounded-xl shadow-lg shadow-gray-500/30 "
            onClick={(e) => setActiveStors(true)}
          >
            Active Store
          </button>
        </div>

        <div className="w-2/3 p-4 flex flex-col flex-wrap gap-5 border-solid border-2 border-gray-600 rounded-xl shadow-xl shadow-green-800/80 ">
          <div className="mx-auto text-2xl ">{storeName}</div>
          <div className="flex flex-wrap gap-5 p-4">
            {isLoading ? <Loader></Loader> : showProducts && productsItems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
