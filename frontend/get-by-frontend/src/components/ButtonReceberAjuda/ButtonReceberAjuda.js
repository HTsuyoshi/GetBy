import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonReceberAjuda.module.css';

const ButtonReceberAjuda = () => (
  <div className={styles.divReceberAjuda} data-testid="ButtonReceberAjuda">
    <button className={styles.buttonReceberAjuda}>Receber ajuda</button>
  </div>
);

ButtonReceberAjuda.propTypes = {};

ButtonReceberAjuda.defaultProps = {};

export default ButtonReceberAjuda;
