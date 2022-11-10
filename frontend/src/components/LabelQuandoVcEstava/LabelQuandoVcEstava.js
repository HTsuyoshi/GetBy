import React from 'react';
import styles from './LabelQuandoVcEstava.module.css';

const LabelQuandoVcEstava = () => (
  <div className={styles.divLabelQuandoVcEstava} data-testid="LabelQuandoVcEstava">
    <label className={styles.labelQuandoVcEstava}>Como você estava se sentindo?</label>
  </div>
);

LabelQuandoVcEstava.propTypes = {};

LabelQuandoVcEstava.defaultProps = {};

export default LabelQuandoVcEstava;
