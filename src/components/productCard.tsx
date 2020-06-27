import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

interface Props {
  api_featured_image: string;
  name: string;
  price: string;
}

const ProductCard: FunctionComponent<Props> = ({
  api_featured_image,
  name,
  price,
}) => {
  return (
    <Container>
      <Box>
        <img src={api_featured_image} alt="makeup"></img>
        <p className="name">{name}</p>
        <Row>
          <p className="price">${price}</p>
          <p>BUY</p>
        </Row>
      </Box>
    </Container>
  );
};

export default ProductCard;
const Container = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Box = styled.div`
  padding: 1vh;
  height: 55vh;
  width: 30vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  border-radius: 30px;

  img {
    height: 25vh;
    width: 25vh;
  }

  .name {
    font-weight: bold;
    text-align: center;
    padding: 0;
  }

  .price {
    font-weight: bold;
    color: magenta;
    padding: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
