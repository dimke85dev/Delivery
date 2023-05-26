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

  const showProductsHandler = (e) => {
    const store = stores.find((el) => el._id === e.target.dataset.id);
    setProducts(store.products);
    setStoreName(store.store_name);

    setShowProducts(true);
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
        (el) => el._id === '646f584110abc9519529585e'
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

  return (
    <div className="w-2/3 mx-auto">
      <div className="mx-auto flex gap-4 p-5">
        <div className="w-1/3 flex flex-col gap-6 p-5 border-solid border-2 border-gray-600 rounded-xl shadow-xl shadow-green-800/80 ">
          {stores.map((store) => (
            <div key={store._id}>
              <Stores
                onClick={showProductsHandler}
                id={store._id}
                showProducts={showProducts}
                stores={store}
              />
            </div>
          ))}
        </div>

        <div className="w-2/3 p-4 flex flex-col flex-wrap gap-5 border-solid border-2 border-gray-600 rounded-xl shadow-xl shadow-green-800/80 ">
          <div className="mx-auto text-2xl ">{storeName}</div>
          <div className="flex flex-wrap gap-5 p-4">
            {isLoading ? (
              <Loader></Loader>
            ) : (
              showProducts &&
              products?.map((product) => (
                <Products key={Math.random()} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
