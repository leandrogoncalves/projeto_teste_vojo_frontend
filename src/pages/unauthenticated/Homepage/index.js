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
import JobsContainerList from "../../../componets/JobsContainerList";


export default class Homepage extends Component {

  handleClickJob = (id) => {
    this.props.history.push(`/job/${id}`);
  }

  render() {
    return (
      <Container maxWidth="full">
        <Container maxWidth="full">
          <Header />
        </Container>
        <Container maxWidth="desktop">
          <div className="Home__Container">
            <div className="Home__Text__Title">
              <Typography
                tag="h1"
                type="title"
                color={themes.vojo.colors.primaryColor}
              >
                <strong>Vagas VOJO</strong>
              </Typography>
            </div>
          </div>
        </Container>
        <JobsContainerList onClick={this.handleClickJob} />
        <Container maxWidth="full">
          <Footer />
        </Container>
      </Container>
    );
  }
}
