import React from 'react';
import styles from './PaginaBuscarAjuda.module.css';
import LabelEmocoes from '../../components/LabelEmocoes/LabelEmocoes';
import LabelComoEstaHoje from '../../components/LabelComoEstaHoje/LabelComoEstaHoje';
import IconHappy from '../../components/IconHappy/IconHappy';
import IconAngry from '../../components/IconAngry/IconAngry';
import IconSad from '../../components/IconSad/IconSad';

const PaginaBuscarAjuda = () => (
  <div className={styles.divPaginaBuscarAjuda} data-testid="PaginaBuscarAjuda">
    <div className={styles.divLabelEmocoes}>
      <LabelEmocoes />
    </div>
    <div className={styles.divLabelComoEstaHoje}>
      <LabelComoEstaHoje />
    </div>
    <div className={styles.divIconesEmocoes}>
      <IconHappy />
      <IconAngry />
      <IconSad />
    </div>  
  </div>
);

PaginaBuscarAjuda.propTypes = {};

PaginaBuscarAjuda.defaultProps = {};

export default PaginaBuscarAjuda;
