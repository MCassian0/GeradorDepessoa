import styled from "styled-components";

export const Botao = styled.button`
  background-color: ${(props) => (props.ligado ? "#ff9a52" : "#ff9a12")};
  color: white;
  border-radius: 10px;
  width: 200px;
  height: 30px;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;
export const BotaoSecundario = styled(Botao)`

background-color:"#ffD9a52"

`

export const CaixaTexto = styled.input`

  width: 200px;
  background-color: white;
  border-color: #ff9a12;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  color: black;
  display: inline-block;
  font-family: Helvetica;
  font-size: 17px;
  line-height: 16px;
  padding: 14px 16px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d3dbd9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  overflow: scroll;
  position: "relative";
  z-index: 1;
`;
export const ContainerForm = styled.div`
  width: 30vw;
  height: 250px;
  background-color: ${props => props.sexo === 'female' ? 'pink' : 'lightblue'};
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 10px;
  margin: 100px auto;
  border-radius: 5px;
`;
