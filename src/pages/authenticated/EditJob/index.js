import React, { Component } from "react";
import {
  Container,
  Header,
  Footer,
  Typography,
  themes,
} from "@mindlab-vojo/component-library";

import { MdExitToApp } from "react-icons/md";
import "./style.sass";
import { ContainerTop, Button } from "./styles";

export default class EditJob extends Component {
  // handleClickJob = () => {
  //   this.props.history.push(`/panel`);
  // }

  render() {
    return (
      <Container maxWidth="full">
        <Container maxWidth="full">
          <Header />
        </Container>
        <ContainerTop>
          <div className="Panel__Container">
            <div className="Panel__Text__Title">
              <Typography
                tag="h1"
                type="title"
                color={themes.vojo.colors.primaryColor}
              >
                <strong>Painel VOJO</strong>
              </Typography>
            </div>
          </div>
          <Button color="#fff" onClick={this.handleLogout}>
            <MdExitToApp size="30" color="#999" />
          </Button>
        </ContainerTop>
        <ContainerTop>
          <div className="Panel__Container">
            <div className="Panel__Text__Title">
              <Typography
                tag="h2"
                type="subtitle"
                color={themes.vojo.colors.primaryColor}
              >
                <strong>Editar vaga</strong>
              </Typography>
            </div>
          </div>
        </ContainerTop>
        <Container maxWidth="full">
          <Footer />
        </Container>
      </Container>
    );
  }
}
