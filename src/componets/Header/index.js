import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { Container, HeaderLogo, Entrar, NavCenter, NavRight } from "./styles";
import logo from "../../assets/images/logo.png";
import { isAuthenticated } from "../../services/auth";

export default function Header() {
  const route = isAuthenticated() ? "/panel" : "/login";

  return (
    <Container>
      <NavCenter>
        <Link to="/">
          <HeaderLogo src={logo} alt="Vojo" />
        </Link>
      </NavCenter>
      <NavRight>
        <Entrar to={route} className>
          <FiLogIn size={20} color="#fff" />
        </Entrar>
      </NavRight>
    </Container>
  );
}
