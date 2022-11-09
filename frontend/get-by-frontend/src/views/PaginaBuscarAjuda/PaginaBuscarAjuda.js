import React from 'react';
import styles from './PaginaBuscarAjuda.module.css';
import LabelEmocoes from '../../components/LabelEmocoes/LabelEmocoes';
import LabelComoEstaHoje from '../../components/LabelComoEstaHoje/LabelComoEstaHoje';
import IconHappy from '../../components/IconHappy/IconHappy';
import IconAngry from '../../components/IconAngry/IconAngry';
import IconSad from '../../components/IconSad/IconSad';

const PaginaBuscarAjuda = () => (
  <div className={styles.PaginaBuscarAjuda} data-testid="PaginaBuscarAjuda">
    PaginaBuscarAjuda Component
    <LabelEmocoes />
    <LabelComoEstaHoje />
    <IconHappy />
    <IconAngry />
    <IconSad />
  </div>
);

PaginaBuscarAjuda.propTypes = {};

PaginaBuscarAjuda.defaultProps = {};

export default PaginaBuscarAjuda;
