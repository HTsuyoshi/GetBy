import React from 'react';
import styles from './LabelTextoAmarelo.module.css';

const LabelTextoAmarelo = (props) => (
  <label className={styles.labelTextoAmarelo}>{props.texto}</label>
);

LabelTextoAmarelo.propTypes = {};

LabelTextoAmarelo.defaultProps = {};

export default LabelTextoAmarelo;
