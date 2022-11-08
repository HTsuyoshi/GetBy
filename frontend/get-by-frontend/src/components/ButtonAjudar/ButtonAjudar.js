import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonAjudar.module.css';
import { useState } from 'react';

const ButtonAjudar = () => (
  <div className={styles.divButtonAjudar} data-testid="ButtonAjudar">
    <button className={styles.buttonAjudar}>Ajudar</button>
  </div>
);

ButtonAjudar.propTypes = {};

ButtonAjudar.defaultProps = {};

export default ButtonAjudar;
