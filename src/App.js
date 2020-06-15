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
          setItems(res.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <Container className="container">
      <h1>The Makeup Database</h1>
      <p>
        Search for 10 different <a href="/">products</a> from 57{" "}
        <a href="/">brands</a>
      </p>
      <Row>
        <input
          placeholder="Covergirl"
          required
          type="text"
          className="brandSearch"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
        <input
          placeholder="Eyeliner"
          required
          type="text"
          className="productSearch"
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
        <button onClick={handleClick}>
          <span role="img" aria-label="search">
            🔎
          </span>
        </button>
      </Row>
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
  height: 100vh;

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: italic;
    font-size: 10vh;
    color: #2e364f;
    margin-bottom: 0px;
  }

  a {
    font-weight: bold;
    color: #f98e8a;
    font-size: 3vh;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: black;
    margin-bottom: 3vh;
    font-size: 3vh;
  }

  input {
    border-radius: 30px;
    border: transparent;
    margin-right: 1vh;
    color: black;
    font-size: 2vh;
    font-weight: bold;
    padding-left: 2vh;
    border: 1px solid gray;
  }

  button {
    font-size: 4vh;
    background: transparent;
    font-weight: bold;
    border: transparent;
    height: 5vh;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
