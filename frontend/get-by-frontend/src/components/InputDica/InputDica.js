import React from 'react';
import styles from './InputDica.module.css';

const InputDica = () => (
  <div className={styles.InputDica} data-testid="InputDica">
    InputDica Component
    <input type="text"></input>
  </div>
);

InputDica.propTypes = {};

InputDica.defaultProps = {};

export default InputDica;
