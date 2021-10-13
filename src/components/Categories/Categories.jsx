import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { commerce } from "../../lib/commerce.js";

import { categoryActionCreators } from "../../redux/action-creators/index";
import { CircularProgress } from "@material-ui/core";

import {
  Container,
  Wrapper,
  TitleContainer,
  Title,
  CategoriesContainer,
  CategoryContainer,
  CategoryCheckbox,
  Category,
  ProductCounter,
  MainTitle,
} from "./style";

const Categories = () => {
  // Object
  const [categories, setCategories] = useState(null);
  // Object
  const [selectedCategories, setSelectedCategories] = useState({});

  // Redux
  const dispatch = useDispatch();
  const { getSelectedCategories } = bindActionCreators(
    categoryActionCreators,
    dispatch
  );

  // Initial useEffect
  useEffect(() => {
    const fetchAndSortCategories = async () => {
      const { data } = await commerce.categories.list();
      const sortedDataObj = {};

      for (const category of data) {
        if (category.description in sortedDataObj) {
          sortedDataObj[category.description] = [
            ...sortedDataObj[category.description],
            category,
          ];
        } else {
          sortedDataObj[category.description] = [category];
        }
      }

      setCategories(sortedDataObj);
    };

    fetchAndSortCategories();
  }, []);

  // useEffect to pass selectedCategories to redux store when the selectedCategories has changed
  useEffect(() => {
    getSelectedCategories(Object.values(selectedCategories));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  // Handle categories
  const handleCategories = (categoryTitle, categorySlug) => {
    let obj = { ...selectedCategories };

    if (selectedCategories[categoryTitle] !== categorySlug) {
      obj[categoryTitle] = categorySlug;
    } else {
      delete obj[categoryTitle];
    }

    setSelectedCategories(obj);
  };

  // Handle if selected style
  const handleSelectedStyle = (categoryTitle, categorySlug) => {
    return (
      selectedCategories && selectedCategories[categoryTitle] === categorySlug
    );
  };

  return (
    <>
      <Container>
        <MainTitle>Termék Szűrő</MainTitle>
        {categories ? (
          Object.keys(categories)
            .sort()
            .map((categoryTitle) => (
              <Wrapper key={categoryTitle}>
                <TitleContainer>
                  <Title>{categoryTitle.slice(3)}</Title>
                </TitleContainer>
                <CategoriesContainer>
                  {categories[categoryTitle].map((category) => (
                    <CategoryContainer
                      key={category.id}
                      onClick={() =>
                        handleCategories(category.description, category.slug)
                      }
                    >
                      <CategoryCheckbox
                        selected={handleSelectedStyle(
                          category.description,
                          category.slug
                        )}
                      />
                      <Category
                        selected={handleSelectedStyle(
                          category.description,
                          category.slug
                        )}
                      >
                        {category.name}
                      </Category>
                      <ProductCounter
                        selected={handleSelectedStyle(
                          category.description,
                          category.slug
                        )}
                      >
                        {category.products}
                      </ProductCounter>
                    </CategoryContainer>
                  ))}
                </CategoriesContainer>
              </Wrapper>
            ))
        ) : (
          <CircularProgress
            color="inherit"
            style={{ margin: "0px auto 10px auto" }}
          />
        )}
      </Container>
    </>
  );
};

export default Categories;
