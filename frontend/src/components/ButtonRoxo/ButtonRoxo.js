import React from 'react';
import styles from './ButtonRoxo.module.css';

const ButtonRoxo = (props) => {

  return(
    <div className={styles.divButtonRoxo} data-testid="ButtonRoxo">
      <button className={styles.buttonRoxo} onClick={props.handleButtonClick}>{props.texto}</button>
    </div>
    )
};

ButtonRoxo.propTypes = {};

ButtonRoxo.defaultProps = {};

export default ButtonRoxo;
