/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import {
  Container,
  Footer,
  Typography,
  themes,
} from "@mindlab-vojo/component-library";
import Header from "../../../componets/Header";


export default class NotFound extends Component {

  render() {
    return (
      <Container maxWidth="full">
        <Container maxWidth="full">
          <Header />
        </Container>
        <Container maxWidth="desktop">
          <div className="Job__Container">
            <div className="Job__Text__Title">
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
