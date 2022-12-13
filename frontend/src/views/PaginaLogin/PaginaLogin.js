import React, {useState} from 'react';
import styles from './PaginaLogin.module.css';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import LabelTextoRoxo from '../../components/LabelTextoRoxo/LabelTextoRoxo';
import LabelTextoAmarelo from '../../components/LabelTextoAmarelo/LabelTextoAmarelo';
import Input from '../../components/Input/Input';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';
import { useNavigate } from "react-router-dom";

const PaginaLogin = () => {
  const [usuario, setUsuario] = useState(null);
  console.log(usuario);
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
    navigate("/")
  }

  return (
    <div className={styles.divPaginaLogin} data-testid="PaginaLogin">
      <LabelTituloAmarelo titulo={"Login"}/>
      <div className={styles.divInput}>
        <LabelInput textoLabel={"Usuário"} />
        <Input handleInputChange={changeUsuario} />
      </div>
      <div className={styles.divInput}>
        <LabelInput textoLabel={"Senha"} />
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
