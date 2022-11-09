import React from 'react';
import styles from './ButtonAjudar.module.css';

const ButtonAjudar = () => (
  <div className={styles.divButtonAjudar} data-testid="ButtonAjudar">
    <button className={styles.buttonAjudar}>Ajudar</button>
  </div>
);

ButtonAjudar.propTypes = {};

ButtonAjudar.defaultProps = {};

export default ButtonAjudar;
