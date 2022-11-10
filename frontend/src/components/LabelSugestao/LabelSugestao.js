import React from 'react';
import styles from './LabelSugestao.module.css';

const LabelSugestao = () => (
  <div className={styles.divLabelSugestao} data-testid="LabelSugestao">
    <label className={styles.labelSugestao}>Sugestão</label>
  </div>
);

LabelSugestao.propTypes = {};

LabelSugestao.defaultProps = {};

export default LabelSugestao;
