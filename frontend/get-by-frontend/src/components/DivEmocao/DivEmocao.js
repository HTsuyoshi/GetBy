import React from 'react';
import styles from './DivEmocao.module.css';

const DivEmocao = () => (
  <div className={styles.DivEmocao} data-testid="DivEmocao">
    DivEmocao Component
    {/* TODO      Ícone     Label    Emocao  */}
  </div>
);

DivEmocao.propTypes = {};

DivEmocao.defaultProps = {};

export default DivEmocao;
