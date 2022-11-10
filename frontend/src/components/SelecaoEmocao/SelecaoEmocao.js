//import React, {useState} from 'react';
import React from 'react';
import styles from './SelecaoEmocao.module.css';

const SelecaoEmocao = (props) => {
  function handleChange(event) {
    console.log(event.target.value);
    props.handleSelectChange(event.target.value);
  }
  return (
  <div className={styles.divSelecaoEmocao} data-testid="SelecaoEmocao">
    <select className={styles.selectSelecaoEmocao} onChange={handleChange}>
      <option className={styles.option}>Selecione a emoção</option>
      <option className={styles.option}>Feliz</option>
      <option className={styles.option}>Triste</option>
      <option className={styles.option}>Bravo</option>
    </select>
  </div>
  );
}

SelecaoEmocao.propTypes = {};

SelecaoEmocao.defaultProps = {};

export default SelecaoEmocao;
