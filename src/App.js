import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from '@emotion/styled'

function App() { 
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');

  useEffect(() => {
  axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=foundation').then((res) => {
    console.log(res);
  },
  ((error) => {
    console.log(error)
  })
  )
  }, [])

  return (
    <div>
      <input
          type="text"
          className="brandSearch"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
        <button onClick={onSearch}>SEARCH</button>
    </div>
  );
}

export default App;
