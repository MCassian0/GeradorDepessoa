import { render } from "@testing-library/react";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import {
  Botao,
  BotaoSecundario,
  Container,
  ContainerForm,
} from "./components/style";

export default class Inicio extends Component {
  state = {
    navegar: false,
    usuario: {},
  };

  async buscarUsuario() {
    this.usuario = await fetch("https://randomuser.me/api");
    this.retornoUsuario = await this.usuario.json();
    console.log(this.retornoUsuario);
    this.retornoUsuario = this.retornoUsuario.results;
    console.log(this.retornoUsuario);

    console.log("jogando no state");
    this.setState({ usuario: this.retornoUsuario[0] });
    console.log(this.state.usuario);
  }

  componentDidMount() {
    localStorage.getItem("login");
  }

  render() {
    return (
      <Container>
        {this.state.navegar === true ? <Navigate to="/" /> : null}

        <h1 style={{ textAlign: "center" }}>Gerador de pessoas</h1>

          
        <ContainerForm sexo={this.state.usuario?.gender}>
          <h3>Crie seu usuario</h3>
            <>
              <p>
                
                Foto:
                <img
                  style={{ borderRadius: "50%", width: "40%" }}
                  src={this.state.usuario?.picture?.large}
                />
              </p>
              <p> Pais:{this.state.usuario?.location?.country} </p>
              <p> Nome:{this.state.usuario?.name?.first} </p>
              <p> idade:{this.state.usuario?.registered?.age} </p>
              <p> Genero:{this.state.usuario?.gender} </p>
            </>

          <BotaoSecundario onClick={() => this.buscarUsuario()}>
            {" "}
            Criar usuario
          </BotaoSecundario>
        </ContainerForm>

        <BotaoSecundario onClick={() => this.setState({ navegar: true })}>
          Voltar
        </BotaoSecundario>
      </Container>
    );
  }
}
