//import React, { useState } from 'react';
import React from 'react';
import styles from './BotaoEnviar.module.css';

const BotaoEnviar = (props) => {

  function handleClick() {
    console.log("Botao Enviar Clicado")
    props.handleButtonClick();
  }

  return(
      <button className={styles.botaoEnviar} onClick={handleClick}>Enviar</button>
    )
};

BotaoEnviar.propTypes = {};

BotaoEnviar.defaultProps = {};

export default BotaoEnviar;
