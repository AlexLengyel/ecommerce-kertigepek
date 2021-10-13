import React from "react";
import { useLocation } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { Container, Logo, NavLink, Cart } from "./style";

const Navbar = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <Container>
      <Logo>Logo</Logo>
      <NavLink to="/termekek" selected={location.pathname === "/termekek"}>
        Termékek
      </NavLink>
      <NavLink to="/szallitas">Szállítás</NavLink>
      <NavLink to="/rolunk" selected={location.pathname === "/rolunk"}>
        Rólunk
      </NavLink>
      <Cart to="kosar" selected={location.pathname === "/kosar"}>
        <Badge badgeContent={1} color="primary">
          <ShoppingCartOutlinedIcon style={{ fontSize: "35px" }} />
        </Badge>
      </Cart>
    </Container>
  );
};

export default Navbar;
