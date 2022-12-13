import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  function handleChange (event) {
    props.handleInputChange(event.target.value);
  }

  return (
    <input className={styles.input} onChange={handleChange} data-testid="Input"/>
  )
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
