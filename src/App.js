import { Component } from "react";
import { Navigate } from "react-router-dom";
import {
  Botao,
  CaixaTexto,
  Container,
  ContainerForm,
} from "./components/style";
export default class App extends Component {
  state = {
    login: "",
    senha: "",
  };

  validarAcesso() {
    this.login = this.state.login;
    this.senha = this.state.senha;

    if (this.state.login === "cassiano" && this.state.senha === "123") {
      localStorage.setItem("login", JSON.stringify(this.state.login));

      alert("acesso permitido");
      this.setState({ navegar: true });
    }
    if (this.state.login !== "cassiano" && this.state.senha !== "123") {
      alert("login ou senha errada, favor verifique");
    }
  }
 
  render() {
    return (
      <Container>
        {this.state.navegar === true ? <Navigate to="/inicio" /> : null}
        <h1>styled Component</h1>
        <ContainerForm>
          <h2> Faça seu login </h2>
          <CaixaTexto
            placeholder="Email"
            onChange={(ptexto) => this.setState({ login: ptexto.target.value })}
          />
          <CaixaTexto
            placeholder="Senha"
            onChange={(ptexto) => this.setState({ senha: ptexto.target.value })}
          />
          <Botao
            onClick={() => this.validarAcesso()}
            
          >
            Confirmar
          </Botao>
        </ContainerForm>
      </Container>
    );
  }
}
