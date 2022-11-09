import React from 'react';
import styles from './IconSad.module.css';
import iconSad from '../../assets/IconeTriste.svg';

const IconSad = () => (
  <div className={styles.divIconSad} data-testid="IconSad">
    <img src={iconSad} className={styles.imgIconSad} alt="Ícone de Login e Logout"/>
    <label className={styles.labelIconSad}>Triste</label>
  </div>
);

IconSad.propTypes = {};

IconSad.defaultProps = {};

export default IconSad;
