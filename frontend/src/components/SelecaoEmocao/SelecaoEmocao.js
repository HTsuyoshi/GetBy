import React, {useState} from 'react';
import styles from './SelecaoEmocao.module.css';

const SelecaoEmocao = () => {
  
  return (
  <div className={styles.divSelecaoEmocao} data-testid="SelecaoEmocao">
    <select className={styles.selectSelecaoEmocao} onChange="#">
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
