import React from 'react';
import styles from './IconLogInOut.module.css';
import iconeLogInOut from '../../assets/IconeLogInOut.svg'

const IconLogInOut = () => (  
  <img  src={iconeLogInOut} className={styles.imgIcon} alt="Ícone de Login e Logout"/>
  );

IconLogInOut.propTypes = {};

IconLogInOut.defaultProps = {};

export default IconLogInOut;
