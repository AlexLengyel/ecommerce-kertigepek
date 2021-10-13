import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { categoryActionCreators } from "../../redux/action-creators/index";
import { commerce } from "../../lib/commerce.js";
import { CircularProgress } from "@material-ui/core";

import { Container } from "./style";

import ProductCard from "../ProductCard/ProductCard";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const selectedCategories = useSelector(
    (state) => state.categoryReducer.selectedCategories
  );

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await commerce.products.list({
        category_slug: selectedCategories,
        query: null,
        limit: 10,
        page: page,
      });
      data ? setProducts(data) : setProducts([]);
      setLoading(false);
    };

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  // Redux
  const dispatch = useDispatch();
  const { getSelectedCategories } = bindActionCreators(
    categoryActionCreators,
    dispatch
  );

  // Unmount Component
  useEffect(() => {
    return () => {
      getSelectedCategories([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress
          color="inherit"
          style={{ margin: "auto", height: "100px", width: "100px" }}
        />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Container>
  );
};

export default ProductCards;
