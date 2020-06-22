import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Typography, themes } from "@mindlab-vojo/component-library";
import Button from "@material-ui/core/Button";
import { BsPlus } from "react-icons/bs";
import { ContainerList, JobList, JobCard } from "./styles";
import vojoIcon from "../../assets/images/vojo_icon.png";
import Loading from "../Loading";
import api from "../../services/api";
import { isAuthenticated } from "../../services/auth";

class JobsContainerList extends Component {
  constructor(props) {
    super(props);
    this.handleClickJob = props.onClick;
    this.state = {
      jobs: [],
      loading: true,
      authenticated: false,
      pathName: this.props.location.pathname.replace("/", ""),
    };
  }

  async componentDidMount() {
    const authenticated = isAuthenticated();

    if (authenticated) {
      this.setState({
        authenticated,
      });
    }

    const { data } = await api.get(`/v3/jobs`);

    this.setState({
      jobs: data,
      loading: false,
    });
  }

  render() {
    const { jobs, loading, authenticated, pathName } = this.state;

    return (
      <ContainerList>
        <div className="Home__Text__Subtitle">
          <Typography
            tag="h2"
            type="subtitle"
            color={themes.vojo.colors.primaryColor}
          >
            <strong>{jobs.length} Vagas disponiveis</strong>
          </Typography>
        </div>

        {authenticated && pathName === "panel" ? (
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "13px",
              borderRadius: "50%",
              height: "60px",
              position: "absolute",
              bottom: "20px",
              right: "40px",
            }}
            href="/panel/job"
          >
            <BsPlus size={40} />
          </Button>
        ) : (
          ""
        )}

        {loading ? (
          <Loading>Carregando ...</Loading>
        ) : (
          <JobList>
            {jobs.map((job) => (
              <JobCard
                key={String(job._id)}
                onClick={() => this.handleClickJob(job._id)}
              >
                <div className="JobCard__LeftWrapper">
                  <div className="JobCard__ImageContainer">
                    <div className="JobCard__ImageContainer__Wrapper">
                      <div className="JobCard__ImageContainer__Wrapper__Cropper">
                        <img src={vojoIcon} alt="oportunidade-de-emprego" />
                      </div>
                    </div>
                  </div>
                  <div className="JobCard__TextContainer">
                    <div className="JobCard__TextContainer__Title">
                      <Typography
                        tag="h2"
                        type="title"
                        color={themes.vojo.colors.primaryColor}
                      >
                        {job.title}
                      </Typography>
                    </div>
                    <div className="JobCard__TextContainer__Cities">
                      <Typography
                        tag="p"
                        type="subtitle"
                        color={themes.vojo.colors.darkGreyColor}
                      >
                        {job.description}
                      </Typography>
                    </div>
                  </div>
                  <div className="JobCard__IconContainer">
                    <div className="JobCard__IconContainer__Wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 0 24 24"
                        width="25px"
                      >
                        <path
                          d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                          fill="#C4C4C4"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </JobCard>
            ))}
          </JobList>
        )}
      </ContainerList>
    );
  }
}

export default withRouter(JobsContainerList);
