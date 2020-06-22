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
import JobsContainerList from "../../../componets/JobsContainerList";
import { Button, ContainerTop } from "./styles";
import { logout } from "../../../services/auth";
import { Link } from "react-router-dom";

export default class Panel extends Component {
  handleClickJob = (id) => {
    this.props.history.push(`/panel/job/${id}`);
  };

  handleLogout = (e) => {
    logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <Container maxWidth="full">
        <Container maxWidth="full">
          <Link to="/" style={{ width: "100%" }}>
            <Header />
          </Link>
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
        <JobsContainerList onClick={this.handleClickJob} />
        <Container maxWidth="full">
          <Footer />
        </Container>
      </Container>
    );
  }
}
