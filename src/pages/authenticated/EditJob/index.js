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
import { ContainerTop, ButtonBack } from "./styles";
import JobForm from "../../../componets/JobForm";
import { Link } from "react-router-dom";

export default class EditJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Editar",
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    if (!params.id) {
      this.setState({
        text: "Inserir",
      });
    }
  }

  render() {
    const { text } = this.state;

    return (
      <Container maxWidth="full">
        <Container maxWidth="full">
          <Link to="/" style={{ width: "100%" }}>
            <Header />
          </Link>
        </Container>
        <ContainerTop>
          <div className="EditJob__Container">
            <div className="EditJob__Text__Title">
              <Typography
                tag="h1"
                type="title"
                color={themes.vojo.colors.primaryColor}
              >
                <strong>Painel VOJO</strong>
              </Typography>
            </div>
          </div>
          <ButtonBack color="#fff" onClick={this.handleLogout}>
            <MdExitToApp size="30" color="#999" />
          </ButtonBack>
        </ContainerTop>
        <ContainerTop>
          <div className="EditJob__Container">
            <div className="EditJob__Text__Title">
              <Typography
                tag="h2"
                type="subtitle"
                color={themes.vojo.colors.primaryColor}
              >
                <strong>{text} vaga</strong>
              </Typography>
            </div>
          </div>
        </ContainerTop>
        <ContainerTop>
          <div className="EditJob__Container__Forms">
            <JobForm />
          </div>
        </ContainerTop>
        <Container maxWidth="full">
          <Footer />
        </Container>
      </Container>
    );
  }
}
