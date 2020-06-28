import React, { FunctionComponent } from "react";
import ProductCard from "./productCard";
import { Keys } from "../App";
import styled from "@emotion/styled";

const Result: FunctionComponent<Keys> = ({ items }: Keys) => {
  if (items === undefined) {
    return null;
  } else if (items === []) {
    console.log("it works");
    return <p>Oops! We didn't find anything for that.</p>;
  } else {
    return (
      <Grid>
        {items.map(function (item: any, id: number) {
          return <ProductCard key={id} {...item} />;
        })}
      </Grid>
    );
  }
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 36vh 36vh 36vh;
`;

export default Result;
