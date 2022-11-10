import React from 'react';
import styles from './DivEmocao.module.css';
import IconAngry from '../IconAngry/IconAngry';

const DivEmocao = () => (
  <div className={styles.divEmocao} data-testid="DivEmocao">
    {/* TODO      Ícone     Label    Emocao  */}
    <IconAngry />
    <label className={styles.labelDescricao}>
      Sugestão
    </label>
    <label className={styles.labelDescricao}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    </label>
  </div>
);

DivEmocao.propTypes = {};

DivEmocao.defaultProps = {};

export default DivEmocao;
