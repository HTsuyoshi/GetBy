import React from 'react';
import styles from './LabelBaseadoNoQueEstaSentindo.module.css';

const LabelBaseadoNoQueEstaSentindo = () => (
  <div className={styles.divLabelBaseadoNoQueEstaSentindo} data-testid="LabelBaseadoNoQueEstaSentindo">
    <label className={styles.labelBaseadoNoQueEstaSentindo}>
      Baseado no que você está sentido agora, aqui está nossa sugestão
    </label>
  </div>
);

LabelBaseadoNoQueEstaSentindo.propTypes = {};

LabelBaseadoNoQueEstaSentindo.defaultProps = {};

export default LabelBaseadoNoQueEstaSentindo;
