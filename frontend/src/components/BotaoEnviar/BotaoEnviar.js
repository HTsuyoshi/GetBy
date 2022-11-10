import React, { useState } from 'react';
import styles from './BotaoEnviar.module.css';

const BotaoEnviar = () => {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log("Botao Enviar Clicado")
    // TODO: Botao - submit formulario e enviar pro back
  }

  return(
      <button className={styles.botaoEnviar} onClick={handleClick}>Enviar</button>
    )
};


BotaoEnviar.propTypes = {};

BotaoEnviar.defaultProps = {};

export default BotaoEnviar;
