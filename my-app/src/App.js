import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ProductCard from './components/productCard';

const Result = ({ items }) => {
  if (items === undefined) {
    return null;
  } else {
  return (
    <div>
    {items.map(function (item, id) {
      return <ProductCard key={id} {...item} />
    })}
    </div>
  )
}}

function App() { 
  const [items, setItems] = useState();
  const [error, setError] = useState();
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');

  console.log('----------',items);

  async function handleClick() {
  await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${product}`).then((res) => {
  // console.log(res.data);
  setItems(res.data);
  },
  ((error) => {
    console.log(error)
  }))}

  console.log(items);
  return (
    <div>
    {/* <ProductCard /> */}
    <input
          required
          type="text"
          className="brandSearch"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
      <input
          required
          type="text"
          className="productSearch"
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
        <button onClick={handleClick}>SEARCH</button>
        {/* if there are items render Result if not don't render result. Boolean if statement */}
        {items && <Result items={items} />}
    </div>
  );
}

export default App;