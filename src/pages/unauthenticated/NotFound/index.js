/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import {
  Container,
  Footer,
  Typography,
  themes,
} from "@mindlab-vojo/component-library";
import Header from "../../../componets/Header";

import "./style.sass";

export default class NotFound extends Component {
  render() {
    return (
      <Container maxWidth="full">
        <Container maxWidth="full">
          <Header />
        </Container>
        <Container maxWidth="desktop">
          <div className="NotFound__Container">
            <div className="NotFound__Text__Title">
              <Typography
                tag="h1"
                type="title"
                color={themes.vojo.colors.primaryColor}
              >
                <strong>Página não encontrada</strong>
              </Typography>
            </div>
          </div>
        </Container>
        <Container maxWidth="full">
          <Footer />
        </Container>
      </Container>
    );
  }
}
