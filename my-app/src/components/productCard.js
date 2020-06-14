import React from 'react';
import styled from '@emotion/styled'

const ProductCard = ({ api_featured_image, name, price, rating, }) => { 
    console.log({api_featured_image, name, price, rating});
    return (
        <Box>
            <p>image</p>
            <p>name</p>
            <p>price</p>
            <p>buy</p>
        </Box>
    )
}

export default ProductCard;

const Box = styled.div`
height: 30vh;
width: 30vh;
border: 1px solid black;
`
