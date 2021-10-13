import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 80vh;
  min-height: 300px;

  overflow: hidden;
  box-shadow: ${(props) => props.theme.cardBoxShadow};

  position: relative;

  display: flex;
`;

export const Wrapper = styled.div`
  height: 100%;

  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.3s ease-in-out;

  display: flex;
`;

export const Slide = styled.div`
  width: 100vw;

  background-color: ${(props) => props.backgroundColor || "white"};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-height: 90%;
  max-width: 90%;
`;

export const Title = styled.h1`
  width: 85%;

  font-size: 4.5vmax;
  font-weight: bold;

  border-bottom: 2px solid ${(props) => props.theme.secondaryGray};
`;

export const Description = styled.p`
  margin: 1.5vmax 0px;

  font-size: 1.2vmax;
  color: ${(props) => props.theme.secondaryGray};
`;

export const Button = styled.button`
  width: 11vmax;
  padding: 3px;

  background-color: ${(props) => props.theme.primaryGreenColor};
  border-radius: 30px;
  border: none;
  box-shadow: ${(props) => props.theme.cardBoxShadow};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease;

  :hover {
    background-color: ${(props) => props.theme.selectingGreen};
  }
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  color: white;
  letter-spacing: 0.5px;
  font-size: 1.2vmax;
  font-weight: bold;
`;

export const InfoContainer = styled.div`
  width: 50%;
  height: 100%;

  color: ${(props) => props.theme.mainBlack};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;

  color: ${(props) => props.theme.mainBlack};
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  position: absolute;
  top: 0px;
  bottom: 0px;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  z-index: 2;
  margin: auto;
  opacity: 0.6;

  transition: opacity 0.3s ease;

  :hover {
    opacity: 1;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
