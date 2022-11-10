import React from 'react';
import styles from './Logo.module.css';

const Logo = () => (
  <div className={styles.divLogo} data-testid="Logo">
    <label className={styles.labelGet}>GET</label>
    <label className={styles.labelBy}>BY</label>
  </div>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
