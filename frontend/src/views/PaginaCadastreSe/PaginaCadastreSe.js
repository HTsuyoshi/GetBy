import React, {useState} from 'react';
import styles from './PaginaCadastreSe.module.css';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import Input from '../../components/Input/Input';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const PaginaCadastreSe = () => {
  const [email, setEmail] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  const navigate = useNavigate();
  // TODO Apagar 2 linhas a seguir
  console.log(email);
  console.log(usuario);
  console.log(senha);

  function changeEmail(emailInput) {
    setEmail(emailInput);
  }
  function changeUsuario(userInput) {
    setUsuario(userInput);
  }
  function changeSenha(passwordInput) {
    setSenha(passwordInput);
  }
  function handleButtonEnviarClicked() {
    console.log("Cadastro");
    const urlPostLogin = 'http://localhost:8000/cadastro/';
    axios.defaults.headers.common['withCredentials'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = false;
    axios.post(urlPostLogin, {
      id_usuario: 0,
      nome: usuario,
      email: email,
      password: senha,
    }).then(function (response){
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
    navigate("/")
  }

  return (
    <div className={styles.divPaginaCadastreSe} data-testid="PaginaCadastreSe">
      <LabelTituloAmarelo titulo={"Cadastre-se"}/>
      <div className={styles.divInput}>
        <LabelInput texto={"Email"} />
        <Input handleInputChange={changeEmail} />
      </div>
      <div className={styles.divInput}>
        <LabelInput texto={"Usuário"} />
        <Input handleInputChange={changeUsuario} />
      </div>
      <div className={styles.divInput}>
        <LabelInput texto={"Senha"} />
        <Input handleInputChange={changeSenha} />
      </div>
      <div className={styles.divButton}> 
        <ButtonAmarelo texto={"Cadastrar"} handleButtonClick={handleButtonEnviarClicked}/>
      </div>
    </div>
  )
};

PaginaCadastreSe.propTypes = {};

PaginaCadastreSe.defaultProps = {};

export default PaginaCadastreSe;
