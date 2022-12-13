import React, {useState} from 'react';
import styles from './PaginaCadastreSe.module.css';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import Input from '../../components/Input/Input';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';
import { useNavigate } from "react-router-dom";

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
    navigate("/")
  }

  return (
    <div className={styles.divPaginaCadastreSe} data-testid="PaginaCadastreSe">
      <LabelTituloAmarelo titulo={"Cadastre-se"}/>
      <div className={styles.divInput}>
        <LabelInput textoLabel={"Email"} />
        <Input handleInputChange={changeEmail} />
      </div>
      <div className={styles.divInput}>
        <LabelInput textoLabel={"Usuário"} />
        <Input handleInputChange={changeUsuario} />
      </div>
      <div className={styles.divInput}>
        <LabelInput textoLabel={"Senha"} />
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
