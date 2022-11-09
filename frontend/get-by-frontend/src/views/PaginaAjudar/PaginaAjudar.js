import React from 'react';
import styles from './PaginaAjudar.module.css';
import LabelEmocoes from '../../components/LabelEmocoes/LabelEmocoes';
import LabelComoEstaHoje from '../../components/LabelComoEstaHoje/LabelComoEstaHoje';

const PaginaAjudar = () => (
  <div className={styles.PaginaAjudar} data-testid="PaginaAjudar">
    PaginaAjudar Component
    <LabelEmocoes />
    <LabelComoEstaHoje />
  </div>
);

PaginaAjudar.propTypes = {};

PaginaAjudar.defaultProps = {};

export default PaginaAjudar;
