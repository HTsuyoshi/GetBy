import React from 'react';
import styles from './LabelExperiencia.module.css';

const LabelExperiencia = () => (
  <div className={styles.divLabelExperiencia} data-testid="LabelExperiencia">
    <label className={styles.labelExperiencia}>Experiência</label>
  </div>
);

LabelExperiencia.propTypes = {};

LabelExperiencia.defaultProps = {};

export default LabelExperiencia;
