import React from "react";

import PageContainer from "../../styles/pageContainer";
import {
  ProductContainer,
  ProductSubContainerCenter,
  ProductSubContainerLeft,
  ProductSubContainerRight,
  Title,
  TitleContainer,
} from "./style";

import Categories from "../../components/Categories/Categories";
import ProductCards from "../../components/ProductCards/ProductCards";

const Products = () => {
  return (
    <PageContainer>
      <TitleContainer>
        <Title>Termékeink</Title>
      </TitleContainer>
      <ProductContainer>
        <ProductSubContainerLeft>
          <Categories />
        </ProductSubContainerLeft>
        <ProductSubContainerCenter>
          <ProductCards />
        </ProductSubContainerCenter>
        <ProductSubContainerRight />
      </ProductContainer>
    </PageContainer>
  );
};

export default Products;
