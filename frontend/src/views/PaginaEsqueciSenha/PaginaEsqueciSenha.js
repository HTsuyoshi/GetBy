import React from 'react';
import styles from './PaginaEsqueciSenha.module.css';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import LabelTextoAmarelo from '../../components/LabelTextoAmarelo/LabelTextoAmarelo';
import Input from '../../components/Input/Input';

const PaginaEsqueciSenha = () => {
  function handleButtonEnviarClicked() {
    document.getElementById("div-label-email-enviado").style.display = "block";
    document.getElementById("div-label-email-enviado").style.justifyContent = "center";
  }
  return (
    <div className={styles.divPaginaEsqueciSenha} data-testid="PaginaEsqueciSenha">
      <LabelTituloAmarelo titulo={"Esqueci minha senha"}/>
      <LabelInput textoLabel={"Coloque o seu email"}/>
      <div className={styles.divInput}>
        <Input/>
      </div>
      <div className={styles.divButton}>
        <ButtonAmarelo texto={"Enviar"} handleButtonClick={handleButtonEnviarClicked}/>
      </div>
      <div id={"div-label-email-enviado"}  style={{display: "none"}}>
        <LabelTextoAmarelo texto={"Enviamos um e-mail para você"}/>
      </div>    
    </div>
  )
};

PaginaEsqueciSenha.propTypes = {};

PaginaEsqueciSenha.defaultProps = {};

export default PaginaEsqueciSenha;
