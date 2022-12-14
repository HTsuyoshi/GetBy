import React from 'react';
import styles from './IconAngry.module.css';
import iconAngry from '../../assets/IconeBravo.svg';

const IconAngry = () => (
  <div className={styles.divIconAngry} data-testid="IconAngry">
    <img src={iconAngry} className={styles.imgIconAngry} alt="Ícone de Login e Logout"/>
    <label className={styles.labelIconAngry}>Bravo</label>
  </div>
);

IconAngry.propTypes = {};

IconAngry.defaultProps = {};

export default IconAngry;
