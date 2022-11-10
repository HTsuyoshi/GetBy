import React from 'react';
import styles from './PaginaAjudar.module.css';
import LabelExperiencia from '../../components/LabelExperiencia/LabelExperiencia';
import LabelQuandoVcEstava from '../../components/LabelQuandoVcEstava/LabelQuandoVcEstava';
import LabelOQTeAjudou from '../../components/LabelOQTeAjudou/LabelOQTeAjudou';
import SelecaoEmocao from '../../components/SelecaoEmocao/SelecaoEmocao';
import InputDica from '../../components/InputDica/InputDica';
import BotaoEnviar from '../../components/BotaoEnviar/BotaoEnviar';

const PaginaAjudar = () => {
  return (
    <div className={styles.divPaginaAjudar} data-testid="PaginaAjudar">
      <LabelExperiencia />
      <LabelQuandoVcEstava />
      <SelecaoEmocao />
      <LabelOQTeAjudou />
      <InputDica />
      <BotaoEnviar />
    </div>
  );
}

PaginaAjudar.propTypes = {};

PaginaAjudar.defaultProps = {};

export default PaginaAjudar;
