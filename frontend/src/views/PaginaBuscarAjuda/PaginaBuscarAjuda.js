import React from 'react';
import styles from './PaginaBuscarAjuda.module.css';
import LabelEmocoes from '../../components/LabelEmocoes/LabelEmocoes';
import LabelTextoRoxo from '../../components/LabelTextoRoxo/LabelTextoRoxo';
import IconHappy from '../../components/IconHappy/IconHappy';
import IconAngry from '../../components/IconAngry/IconAngry';
import IconSad from '../../components/IconSad/IconSad';

const PaginaBuscarAjuda = () => (
  <div className={styles.divPaginaBuscarAjuda} data-testid="PaginaBuscarAjuda">
    <div className={styles.divLabelEmocoes}>
      <LabelEmocoes />
    </div>
    <div className={styles.divLabelTextoRoxo}>
      <LabelTextoRoxo texto={"Como você está se sentindo hoje?"}/>
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
