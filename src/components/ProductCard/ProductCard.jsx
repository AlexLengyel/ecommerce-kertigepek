import React from "react";

import { Container, Image, Price, Title } from "./style";

const ProductCard = ({ product }) => {
  return (
    <Container>
      <Image
        src={
          product.image
            ? product.image.url
            : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
        }
        alt="Termék Képe"
      />
      <Price>{product.price.formatted_with_symbol}</Price>
      <Title>{product.name}</Title>
    </Container>
  );
};

export default ProductCard;
