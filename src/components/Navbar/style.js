import styled from "styled-components";
import { Link } from "react-router-dom";

// Navbar
export const Container = styled.div`
  height: ${(props) => props.theme.navbarHeight};
  width: 100vw;
  padding: 0px 40px;

  position: fixed;
  top: 0px;
  z-index: 10;

  color: ${(props) => props.theme.mainBlack};
  background-color: ${(props) => props.theme.primaryGreenColor};
  box-shadow: ${(props) => props.theme.navBarBoxShadow};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.p`
  padding: 0px 15px;
  margin-right: auto;

  cursor: pointer;
`;

export const NavLink = styled(Link)`
  padding: 3px 5px;
  margin: 0px 10px;

  font-size: ${(props) => props.theme.fontSizeXXL};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  // If on current page or not
  color: ${(props) => (props.selected ? "white" : props.theme.mainBlack)};

  transition: opacity 0.3s ease;
  //transition: color 0.3s ease;

  :hover {
    //color: white;
    opacity: ${(props) => (props.selected ? "1" : "0.4")};
  }

  // 2. Design
  /*
  // If on current page or not
  padding-top: ${(props) => (props.selected ? "7px" : "3px")};
  border-bottom: ${(props) => (props.selected ? "4px solid white" : "none")};

  transition: padding 0.3s ease;

  :hover {
    padding-top: 7px;
    border-bottom: 4px solid white;
  }
  */
`;

export const Cart = styled(Link)`
  padding: 0px 15px;
  margin-left: auto;
  margin-top: 2px;

  color: ${(props) => (props.selected ? "white" : props.theme.mainBlack)};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  transition: opacity 0.3s ease;
  //transition: color 0.3s ease;

  :hover {
    //color: white;
    opacity: 0.4;
  }
`;

// Marginholder
export const Margin = styled.div`
  height: ${(props) => props.theme.navbarHeight};
`;
