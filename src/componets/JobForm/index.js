/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-await-in-loop */
import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { Send, ArrowBack } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BsTrash } from "react-icons/bs";
import swal from "sweetalert";
import Loading from "../Loading";
import api from "../../services/api";
import { defaultInputState } from "../../utils/formDefaultStates";
import stateKeysToArray from "../../utils/stateKeysToArray";

import "react-toastify/dist/ReactToastify.css";

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fields: {
        title: { ...defaultInputState, name: "title" },
        description: {
          ...defaultInputState,
          name: "description",
          minLength: 50,
        },
        functions: { ...defaultInputState, name: "functions" },
        sector: { ...defaultInputState, name: "sector" },
        level: { ...defaultInputState, name: "level" },
        type: { ...defaultInputState, name: "type" },
        requirements: { ...defaultInputState, name: "requirements" },
        salary: { ...defaultInputState, name: "salary", type: "number" },
      },
      isFieldsValid: true,
      loading: true,
    };
  }

  async componentDidMount() {
    const { params } = this.props.match;

    if (!params.id) {
      this.setState({
        loading: false,
      });
      return;
    }

    const { data } = await api.get(`/v3/jobs/${params.id}`);

    this.setState({
      id: params.id,
      fields: {
        title: {
          ...defaultInputState,
          value: data.title,
          name: "title",
        },
        description: {
          ...defaultInputState,
          value: data.description,
          name: "description",
          minLength: 50,
        },
        functions: {
          ...defaultInputState,
          value: data.functions,
          name: "functions",
        },
        sector: {
          ...defaultInputState,
          value: data.sector,
          name: "sector",
        },
        level: {
          ...defaultInputState,
          value: data.level,
          name: "level",
        },
        type: { ...defaultInputState, value: data.type, name: "type" },
        requirements: {
          ...defaultInputState,
          value: data.requirements,
          name: "requirements",
        },
        salary: {
          ...defaultInputState,
          value: data.salary,
          name: "salary",
          type: "number",
        },
      },
      loading: false,
    });
  }

  handleFieldUpdate = (fieldName, event) => {
    event.preventDefault();

    this.setState({
      fields: {
        ...this.state.fields,
        [fieldName]: {
          ...this.state.fields[fieldName],
          name: fieldName,
          value: event.target.value,
          showError: false,
        },
      },
    });
  };

  createRequestObject = () => {
    const fieldKeys = stateKeysToArray(this.state.fields);
    const data = {};

    for (let i = 0; i < fieldKeys.length; i++) {
      const field = fieldKeys[i];
      if (this.state.fields[field].type === "number") {
        data[field] = parseFloat(this.state.fields[field].value);
      } else {
        data[field] = this.state.fields[field].value;
      }
    }

    return data;
  };

  checkIsFieldsValid = async (fieldKeys) => {
    for (let i = 0; i < fieldKeys.length; i++) {
      const field = fieldKeys[i];
      if (this.state.fields[field].isValid === false) {
        await this.setState({
          isFieldsValid: false,
          fields: {
            ...this.state.fields,
            [field]: {
              ...this.state.fields[field],
              showError: true,
              errorMessage: "Valor inválido",
            },
          },
        });
        return;
      }
      if (this.state.fields[field].value === "") {
        await this.setState({
          isFieldsValid: false,
          fields: {
            ...this.state.fields,
            [field]: {
              ...this.state.fields[field],
              showError: true,
              errorMessage: "Campo obrigatório",
            },
          },
        });
        return;
      }
      if (
        this.state.fields[field].minLength &&
        this.state.fields[field].value.length <
          this.state.fields[field].minLength
      ) {
        await this.setState({
          isFieldsValid: false,
          fields: {
            ...this.state.fields,
            [field]: {
              ...this.state.fields[field],
              showError: true,
              errorMessage: `O campo ${field} deve ter mais de ${this.state.fields[field].minLength} caracteres`,
            },
          },
        });
        return;
      }
    }

    this.setState({ isFieldsValid: true });
  };

  handleClickBack = () => {
    this.props.history.push("/panel");
  };

  handleSaveClick = async () => {
    const fieldKeys = stateKeysToArray(this.state.fields);

    await this.checkIsFieldsValid(fieldKeys);

    if (this.state.isFieldsValid) {
      const requestData = this.createRequestObject();
      await this.saveSet(requestData);
    }
  };

  handleDeleteClick = async () => {
    swal({
      title: "Tem certeza que deseja deletar a vaga?",
      text: "Esta ação não poderá ser revertida!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.handleDelete();
      }
    });
  };

  saveSet = async (data) => {
    if (this.state.id) {
      await this.handleUpdate(data);
      return;
    }

    await this.handleCreate(data);
    return;
  };

  handleCreate = async (data) => {
    api
      .post(`${process.env.REACT_APP_API}/v3/jobs`, data)
      .then(async (response) => {
        toast.success("Vaga criada com sucesso");
        setTimeout(() => this.handleClickBack(), 3000);
      })
      .catch(async (error) => {
        const { message } = error.response.data;
        toast.error(message || "Erro ao salvar vaga");
      });
  };

  handleUpdate = async (data) => {
    api
      .put(`${process.env.REACT_APP_API}/v3/jobs/${this.state.id}`, data)
      .then(async (response) => {
        toast.success("Vaga atualizada com sucesso");
      })
      .catch(async (error) => {
        const { message } = error.response.data;
        toast.error(message || "Erro ao salvar vaga");
      });
  };

  handleDelete = async () => {
    api
      .delete(`${process.env.REACT_APP_API}/v3/jobs/${this.state.id}`)
      .then(async (response) => {
        toast.success("Vaga deletada com sucesso");
        setTimeout(() => this.handleClickBack(), 3000);
      })
      .catch(async (error) => {
        const { message } = error.response.data;
        toast.error(message || "Erro ao deletar vaga");
      });
  };

  handleChangeOnlyNumber(fieldName, event) {
    event.preventDefault();
    const onlyNums = event.target.value.replace(/[^0-9]/g, "");
    this.setState({
      fields: {
        ...this.state.fields,
        [fieldName]: {
          ...this.state.fields[fieldName],
          name: parseFloat(onlyNums),
          value: onlyNums,
          showError: false,
        },
      },
    });
  }

  render() {
    const { fields, loading, id } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <form noValidate autoComplete="off">
        <TextField
          error={fields.title.showError}
          helperText={fields.title.errorMessage}
          fullWidth
          variant="filled"
          id="title"
          name="title"
          label="Titulo"
          placeholder="Titulo"
          autoComplete="off"
          value={fields.title.value}
          style={{ marginBottom: "20px" }}
          onChange={(event) => this.handleFieldUpdate("title", event)}
        />

        <TextField
          error={fields.description.showError}
          helperText={fields.description.errorMessage}
          fullWidth
          multiline
          rows={3}
          id="description"
          name="description"
          label="Descrição"
          placeholder="Descrição"
          autoComplete="off"
          variant="filled"
          value={fields.description.value}
          style={{ marginBottom: "20px" }}
          onChange={(event) => this.handleFieldUpdate("description", event)}
        />

        <TextField
          error={fields.functions.showError}
          helperText={fields.functions.errorMessage}
          fullWidth
          variant="filled"
          id="functions"
          name="functions"
          label="Funções"
          placeholder="Funções"
          autoComplete="off"
          value={fields.functions.value}
          style={{ marginBottom: "20px" }}
          onChange={(event) => this.handleFieldUpdate("functions", event)}
        />

        <TextField
          error={fields.sector.showError}
          helperText={fields.sector.errorMessage}
          fullWidth
          variant="filled"
          id="sector"
          name="sector"
          label="Setor"
          placeholder="Setor"
          autoComplete="off"
          value={fields.sector.value}
          style={{ marginBottom: "20px" }}
          onChange={(event) => this.handleFieldUpdate("sector", event)}
        />

        <TextField
          error={fields.level.showError}
          helperText={fields.level.errorMessage}
          fullWidth
          variant="filled"
          id="level"
          name="level"
          label="Nível"
          placeholder="Nível"
          autoComplete="off"
          value={fields.level.value}
          style={{ marginBottom: "20px" }}
          onChange={(event) => this.handleFieldUpdate("level", event)}
        />

        <TextField
          error={fields.title.showError}
          helperText={fields.title.errorMessage}
          fullWidth
          variant="filled"
          id="type"
          name="type"
          label="Tipo"
          placeholder="Tipo"
          autoComplete="off"
          value={fields.type.value}
          style={{ marginBottom: "20px" }}
          onChange={(event) => this.handleFieldUpdate("type", event)}
        />

        <TextField
          error={fields.requirements.showError}
          helperText={fields.requirements.errorMessage}
          fullWidth
          variant="filled"
          id="requirements"
          name="requirements"
          label="Requisitos"
          placeholder="Requisitos"
          autoComplete="off"
          value={fields.requirements.value}
          style={{ marginBottom: "20px" }}
          onChange={(event) => this.handleFieldUpdate("requirements", event)}
        />

        <TextField
          error={fields.salary.showError}
          helperText={fields.salary.errorMessage}
          fullWidth
          variant="filled"
          id="salary"
          name="salary"
          label="Salário"
          placeholder="Salário"
          autoComplete="off"
          value={fields.salary.value}
          style={{ marginBottom: "20px" }}
          onChange={(event) => this.handleChangeOnlyNumber("salary", event)}
        />

        <div className="EditJob__Container__Button">
          <Button
            variant="contained"
            color="default"
            endIcon={<ArrowBack />}
            style={{ marginRight: "20px" }}
            onClick={this.handleClickBack}
          >
            Voltar
          </Button>
          {!id ? (
            ""
          ) : (
            <Button
              variant="contained"
              color="secondary"
              endIcon={<BsTrash />}
              style={{ marginRight: "20px" }}
              onClick={() => this.handleDeleteClick()}
            >
              Deletar
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            endIcon={<Send />}
            onClick={() => this.handleSaveClick()}
          >
            Salvar
          </Button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    );
  }
}

export default withRouter(JobForm);
