import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  min-width: 150px;
  max-width: 300px;
  margin: 0px 20px;

  box-shadow: ${(props) => props.theme.cardBoxShadow};
  color: ${(props) => props.theme.mainBlack};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: contain;
`;

export const Price = styled.p``;

export const Title = styled.h2`
  font-weight: bold;
  text-align: center;
`;
