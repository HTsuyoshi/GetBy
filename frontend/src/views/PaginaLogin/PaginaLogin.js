import React, {useState} from 'react';
import styles from './PaginaLogin.module.css';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import LabelTextoRoxo from '../../components/LabelTextoRoxo/LabelTextoRoxo';
import LabelTextoAmarelo from '../../components/LabelTextoAmarelo/LabelTextoAmarelo';
import Input from '../../components/Input/Input';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const PaginaLogin = () => {
  const [email, setUsuario] = useState(null);
  console.log(email);
  const [senha, setSenha] = useState(null);
  console.log(senha);

  const navigate = useNavigate();

  function changeUsuario(userInput) {
    setUsuario(userInput);
  }

  function changeSenha(passwordInput) {
    setSenha(passwordInput);
  }

  function handleButtonEnviarClicked() {
    console.log("Login");
    const urlPostLogin = 'http://localhost:8000/login/';
    axios.defaults.headers.common['withCredentials'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = false;
    axios.post(urlPostLogin, {
      email: email,
      senha: senha,
    },{
       withCredentials: true
    }).then(function (response){
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
    navigate('/')
  }

  return (
    <div className={styles.divPaginaLogin} data-testid="PaginaLogin">
      <LabelTituloAmarelo titulo={"Login"}/>
      <div className={styles.divInput}>
        <LabelInput texto={"Email"} />
        <Input handleInputChange={changeUsuario} />
      </div>
      <div className={styles.divInput}>
        <LabelInput texto={"Senha"} />
        <Input handleInputChange={changeSenha} />
      </div>
      <div className={styles.divLabelsRoxaEAmarela}>
        <LabelTextoRoxo texto={"Ainda não tem uma conta?"} />
        <a href={"/cadastreSe"} className={styles.aEsqueceuSenha}>
          <LabelTextoAmarelo texto={"Clique aqui"} />
        </a>
      </div>
      <div className={styles.divLabelsRoxaEAmarela}>
        <LabelTextoRoxo texto={"Esqueceu sua senha?"} />
        <a href={"/esqueciSenha"} className={styles.aEsqueceuSenha}>
          <LabelTextoAmarelo texto={"Clique aqui"} />
        </a>
      </div> 
      <div className={styles.divButton}> 
        <ButtonAmarelo texto={"Entrar"} handleButtonClick={handleButtonEnviarClicked}/>
      </div>
    </div>
  )
};

PaginaLogin.propTypes = {};

PaginaLogin.defaultProps = {};

export default PaginaLogin;
