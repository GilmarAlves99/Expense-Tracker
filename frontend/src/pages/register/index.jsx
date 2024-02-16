import { Main, Body, Logo, Spacing, CreateAcc } from "./styles"
import { Input, Button } from "../../components";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";



const Register = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  const save = async (ev) => {
    ev.preventDefault();
    await axios.post("http://localhost:3001/user", data);
    alert("Usuario criado com sucesso");

  }


  return (
    <Main>
      <Body>
        <form onSubmit={save}>


          <Logo>Gerenciador Financeiro</Logo>
          <Input
            label="Nome"
            placeholder="Digite o nome"
            required={true}
            value={data.name}
            onChange={(ev) => setData({
              ...data, name: ev.target.value
            })}
          />
          <Spacing />
          <Input
            label="Email"
            placeholder="Digite o email"
            required={true}
            type="email"
            value={data.email}
            onChange={(ev) => setData({
              ...data, email: ev.target.value
            })}
          />
          <Spacing />
          <Input
            label="Senha"
            placeholder="Digite a senha"
            type="password"
            required={true}
            value={data.password}
            onChange={(ev) => setData({
              ...data, password: ev.target.value
            })}
          />
          <Spacing />
          <Button
            type="submit"
            label="Criar Conta" variant="btn-primary" />
          <Spacing />
          <CreateAcc
            onClick={() => navigate("/login")}
          >Fazer Login</CreateAcc>
        </form>
      </Body>
    </Main>
  )
}

export default Register;