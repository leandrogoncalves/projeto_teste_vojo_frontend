/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import {
  Container,
  Footer,
  Typography,
  themes,
} from "@mindlab-vojo/component-library";
import { FaRegBuilding, FaUserSecret } from "react-icons/fa";
import { RiExchangeFundsLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsFillLayersFill, BsListCheck } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import api from "../../../services/api";
import Header from "../../../componets/Header";

import "./style.sass";
import vojoIcon from "../../../assets/images/vojo_icon.png";
import { Loading } from "./styles";

export default class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { params } = this.props.match;

    if (!params.id) {
      this.props.history.push("/");
    }

    const { data } = await api.get(`/v3/jobs/${params.id}`);

    this.setState({
      job: data,
      loading: false,
    });
  }

  render() {
    const { job, loading } = this.state;

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
                <strong>Vaga VOJO</strong>
              </Typography>
            </div>
          </div>
          {loading ? (
            <Loading>Carregando ...</Loading>
          ) : (
            <div className="Job__Content">
              <div className="Job__Content__Left">
                <img src={vojoIcon} alt="oportunidade-de-emprego" />
              </div>
              <div className="Job__Content__Right">
                <div className="Job__Title">
                  <Typography
                    tag="h2"
                    type="title"
                    color={themes.vojo.colors.primaryColor}
                  >
                    {job.title}
                  </Typography>
                </div>

                {/* Descrição */}
                {!job.description ? (
                  ""
                ) : (
                  <div className="Job__Section">
                    <div className="Job__Icon">
                      <FaRegBuilding size={20} color="#0C14B1" />
                    </div>
                    <div className="Job__Data">
                      <div className="Job__Data__Tile">
                        <Typography
                          tag="h3"
                          type="subtitle"
                          color={themes.vojo.colors.primaryColor}
                        >
                          Descrição
                        </Typography>
                      </div>
                      <div className="Job__Data__Description">
                        <Typography
                          tag="p"
                          type="subtitle"
                          color={themes.vojo.colors.darkGreyColor}
                        >
                          {job.description}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )}
                {/* Job__Section */}

                {/* Função */}
                {!job.functions ? (
                  ""
                ) : (
                  <div className="Job__Section">
                    <div className="Job__Icon">
                      <RiExchangeFundsLine size={20} color="#0C14B1" />
                    </div>
                    <div className="Job__Data">
                      <div className="Job__Data__Tile">
                        <Typography
                          tag="h3"
                          type="subtitle"
                          color={themes.vojo.colors.primaryColor}
                        >
                          Funções
                        </Typography>
                      </div>
                      <div className="Job__Data__Description">
                        <Typography
                          tag="p"
                          type="subtitle"
                          color={themes.vojo.colors.darkGreyColor}
                        >
                          {job.functions}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )}
                {/* Job__Section */}

                {/* Setor */}
                {!job.sector ? (
                  ""
                ) : (
                  <div className="Job__Section">
                    <div className="Job__Icon">
                      <FaUserSecret size={20} color="#0C14B1" />
                    </div>
                    <div className="Job__Data">
                      <div className="Job__Data__Tile">
                        <Typography
                          tag="h3"
                          type="subtitle"
                          color={themes.vojo.colors.primaryColor}
                        >
                          Setor
                        </Typography>
                      </div>
                      <div className="Job__Data__Description">
                        <Typography
                          tag="p"
                          type="subtitle"
                          color={themes.vojo.colors.darkGreyColor}
                        >
                          {job.sector}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )}
                {/* Job__Section */}

                {/* Nivel */}
                {!job.level ? (
                  ""
                ) : (
                  <div className="Job__Section">
                    <div className="Job__Icon">
                      <BsFillLayersFill size={20} color="#0C14B1" />
                    </div>
                    <div className="Job__Data">
                      <div className="Job__Data__Tile">
                        <Typography
                          tag="h3"
                          type="subtitle"
                          color={themes.vojo.colors.primaryColor}
                        >
                          Nível
                        </Typography>
                      </div>
                      <div className="Job__Data__Description">
                        <Typography
                          tag="p"
                          type="subtitle"
                          color={themes.vojo.colors.darkGreyColor}
                        >
                          {job.level}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )}
                {/* Job__Section */}

                {/* Tipo */}
                {!job.type ? (
                  ""
                ) : (
                  <div className="Job__Section">
                    <div className="Job__Icon">
                      <FiClock size={20} color="#0C14B1" />
                    </div>
                    <div className="Job__Data">
                      <div className="Job__Data__Tile">
                        <Typography
                          tag="h3"
                          type="subtitle"
                          color={themes.vojo.colors.primaryColor}
                        >
                          Tipo
                        </Typography>
                      </div>
                      <div className="Job__Data__Description">
                        <Typography
                          tag="p"
                          type="subtitle"
                          color={themes.vojo.colors.darkGreyColor}
                        >
                          {job.type}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )}
                {/* Job__Section */}

                {/* Rwquisitos */}
                {!job.requirements ? (
                  ""
                ) : (
                  <div className="Job__Section">
                    <div className="Job__Icon">
                      <BsListCheck size={20} color="#0C14B1" />
                    </div>
                    <div className="Job__Data">
                      <div className="Job__Data__Tile">
                        <Typography
                          tag="h3"
                          type="subtitle"
                          color={themes.vojo.colors.primaryColor}
                        >
                          Requisitos
                        </Typography>
                      </div>
                      <div className="Job__Data__Description">
                        <Typography
                          tag="p"
                          type="subtitle"
                          color={themes.vojo.colors.darkGreyColor}
                        >
                          {job.requirements}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )}
                {/* Job__Section */}

                {/* Rwquisitos */}
                {!job.salary ? (
                  ""
                ) : (
                  <div className="Job__Section">
                    <div className="Job__Icon">
                      <RiMoneyDollarCircleLine size={20} color="#0C14B1" />
                    </div>
                    <div className="Job__Data">
                      <div className="Job__Data__Tile">
                        <Typography
                          tag="h3"
                          type="subtitle"
                          color={themes.vojo.colors.primaryColor}
                        >
                          Salário
                        </Typography>
                      </div>
                      <div className="Job__Data__Description">
                        <Typography
                          tag="p"
                          type="subtitle"
                          color={themes.vojo.colors.darkGreyColor}
                        >
                          R$ {job.salary}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )}
                {/* Job__Section */}
              </div>
            </div>
          )}
        </Container>
        <Container maxWidth="full">
          <Footer />
        </Container>
      </Container>
    );
  }
}
