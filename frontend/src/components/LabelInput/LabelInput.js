import React from 'react';
import styles from './LabelInput.module.css';

const LabelInput = (props) => (
  <div className={styles.divLabelInput} data-testid="LabelInput">
    <label className={styles.labelInput} >
      {props.texto}
    </label>
  </div>
);

LabelInput.propTypes = {};

LabelInput.defaultProps = {};

export default LabelInput;
