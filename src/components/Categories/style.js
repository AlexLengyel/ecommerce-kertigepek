import styled from "styled-components";

// Main Container
export const Container = styled.div`
  width: 90%;

  padding: 5px 8%;

  background-color: ${(props) => props.theme.primaryGreenColor};
  box-shadow: ${(props) => props.theme.navBarBoxShadow};
  border-radius: 10px;
  color: ${(props) => props.theme.mainBlack};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Wrapper for the categories and titles
export const Wrapper = styled.div`
  width: 100%;
`;

// Title Container
export const TitleContainer = styled.div`
  width: 100%;

  margin-bottom: 5px;

  border-bottom: 2px solid ${(props) => props.theme.mainBlack};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  margin: 10px auto;

  font-size: ${(props) => props.theme.fontSizeXXL};
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
`;

export const Title = styled.h2`
  margin: 5px 0px;

  font-size: ${(props) => props.theme.fontSizeL};
  font-weight: bold;
  text-align: center;
`;

// Search bar
export const SearchBar = styled.input`
  width: 100%;

  font-size: ${(props) => props.theme.mainBlack};
`;

// Categories Container
export const CategoriesContainer = styled.div`
  width: 100%;

  border-bottom: ${(props) =>
    props.hasSubCategories ? `2px solid ${props.theme.mainBlack}` : "none"};
`;

// Category Container
export const CategoryCheckbox = styled.div`
  width: ${(props) => props.theme.fontSizeL};
  height: ${(props) => props.theme.fontSizeL};
  margin-right: 5%;

  border-radius: 6px;
  background-color: ${(props) =>
    props.selected ? props.theme.mainBlack : "white"};
  border: ${(props) => (props.selected ? "3px solid white" : "none")};

  transition: opacity 0.3s ease;
`;

export const Category = styled.p`
  font-size: ${(props) => props.theme.fontSizeL};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};

  transition: opacity 0.3s ease;
`;

export const ProductCounter = styled.p`
  margin-left: auto;

  font-size: ${(props) => props.theme.fontSizeL};
  opacity: ${(props) => (props.selected ? "1" : "0.6")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};

  transition: opacity 0.3s ease;
`;

export const CategoryContainer = styled.div`
  margin-bottom: 5px;
  min-width: 50px;

  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover ${CategoryCheckbox} {
    opacity: 0.4;
  }

  &:hover ${Category} {
    opacity: 0.4;
  }

  &:hover ${ProductCounter} {
    opacity: 0.4;
  }
`;
