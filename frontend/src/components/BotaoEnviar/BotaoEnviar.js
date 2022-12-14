import React from 'react';
import styles from './BotaoEnviar.module.css';

const BotaoEnviar = (props) => {

  return(
      <button className={styles.botaoEnviar} onClick={props.handleButtonClick}>Enviar</button>
    )
};

BotaoEnviar.propTypes = {};

BotaoEnviar.defaultProps = {};

export default BotaoEnviar;
