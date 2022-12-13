import React from 'react';
import styles from './LabelTextoRoxo.module.css';

const LabelTextoRoxo = (props) => (
  <label className={styles.labelTextoRoxo}>{props.texto}</label>
);

LabelTextoRoxo.propTypes = {};

LabelTextoRoxo.defaultProps = {};

export default LabelTextoRoxo;
