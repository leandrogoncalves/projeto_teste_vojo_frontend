import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #391ddd;
  height: 68px;
  width: 100%;
  z-index: 10;

  & a {
    align-items: center;
  }
`;

export const NavCenter = styled.nav`
  flex:1;
  display: flex;
  justify-content: center;
  margin-right: -40px;
`;

export const NavRight = styled.nav`
  justify-content: right;
  padding-right: 20px;
`;

export const HeaderLogo = styled.img`
  height: 20px;
`;

export const Entrar = styled(Link)`
  flex:1
`;
