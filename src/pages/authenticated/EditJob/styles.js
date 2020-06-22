import styled from "styled-components";
import { darken } from "polished";

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 960px;
  padding: 0 15px;
`;

export const ButtonBack = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: none;
  background-color: ${({ color }) => color};
  margin-top: 10px;
  color: #fff;
  i {
    font-size: 18px;
  }
  &:hover {
    background-color: ${({ color }) => darken(0.05, color)};
  }
  &:active {
    background-color: ${({ color }) => darken(0.07, color)};
  }
`;
