import React from 'react';
import styles from './LabelTituloAmarelo.module.css';

const LabelTituloAmarelo = (props) => (
  <div className={styles.divLabelTituloAmarelo} data-testid="LabelTituloAmarelo">
    <label className={styles.labelTituloAmarelo} >
      {props.titulo}
    </label>
  </div>
);

LabelTituloAmarelo.propTypes = {};

LabelTituloAmarelo.defaultProps = {};

export default LabelTituloAmarelo;
