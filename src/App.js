import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ProductCard from "./components/productCard";
import styled from "@emotion/styled";

const Result = ({ items }) => {
  if (items === undefined) {
    return null;
  } else {
    return (
      <Grid>
        {items.map(function (item, id) {
          return <ProductCard key={id} {...item} />;
        })}
      </Grid>
    );
  }
};

function App() {
  const [items, setItems] = useState();
  const [error, setError] = useState();
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");

  async function handleClick() {
    await axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${product}`
      )
      .then(
        (res) => {
          // console.log(res.data);
          setItems(res.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  console.log(items);
  return (
    <Container>
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
    </Container>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 36vh 36vh 36vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
