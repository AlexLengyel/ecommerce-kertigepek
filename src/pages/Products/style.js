import styled from "styled-components";

export const TitleContainer = styled.div`
  height: 200px;
  width: 70%;

  margin-bottom: 60px;

  border-bottom: 2px solid ${(props) => props.theme.secondaryGray};
  color: ${(props) => props.theme.mainBlack};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizeTitle};
  letter-spacing: 3px;
`;

export const ProductContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const ProductSubContainerLeft = styled.div`
  flex: 1;
  min-width: 190px;

  display: flex;
  justify-content: center;
`;

export const ProductSubContainerCenter = styled.div`
  flex: 4;

  background-color: blue;
`;

export const ProductSubContainerRight = styled.div`
  flex: 1;
`;
