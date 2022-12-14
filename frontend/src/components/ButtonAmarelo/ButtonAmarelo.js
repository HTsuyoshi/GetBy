import React from 'react';
import styles from './ButtonAmarelo.module.css';

const ButtonAmarelo = (props) => {
   
  return(
    <div className={styles.divButtonAmarelo} data-testid="ButtonAmarelo">
      <button className={styles.buttonAmarelo} onClick={props.handleButtonClick}>{props.texto}</button>
    </div>
    )
};


ButtonAmarelo.propTypes = {};

ButtonAmarelo.defaultProps = {};

export default ButtonAmarelo;
