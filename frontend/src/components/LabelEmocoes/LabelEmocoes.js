import React from 'react';
import styles from './LabelEmocoes.module.css';

const LabelEmocoes = () => (
  <div className={styles.divLabelEmocoes} data-testid="LabelEmocoes">
    <label className={styles.labelEmocoes} >
      Emoções
    </label>
  </div>
);

LabelEmocoes.propTypes = {};

LabelEmocoes.defaultProps = {};

export default LabelEmocoes;
