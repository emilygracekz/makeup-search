import React, { useState, FunctionComponent } from "react";
import "./App.css";
import axios from "axios";
import Result from "./components/result";
import styled from "@emotion/styled";

export interface Keys {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency?: number;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string;
  price_sign?: string;
  product_api_url: string;
  product_colors: [];
  product_link: string;
  product_type: string;
  rating?: number;
  tag_list: any;
  updated_at: string;
  website_link: string;
}

const App = () => {
  const [items, setItems] = useState<
    | {
        api_featured_image: string;
        brand: string;
        category: string;
        created_at: string;
        currency?: number;
        description: string;
        id: number;
        image_link: string;
        name: string;
        price: string;
        price_sign?: string;
        product_api_url: string;
        product_colors: [];
        product_link: string;
        product_type: string;
        rating?: number;
        tag_list: any;
        updated_at: string;
        website_link: string;
      }[]
    | undefined
    | []
  >();
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
  console.log(items);

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
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
  position: absolute;
  width: 100%;

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
