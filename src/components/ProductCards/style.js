import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  color: ${(props) => props.theme.mainBlack};

  background-color: white;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
