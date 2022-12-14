import React from 'react';
import styles from './IconHome.module.css';
import iconHome from '../../assets/IconeCasa.png';

const IconHome = () => (
  <div className={styles.divIconHome} data-testid="IconHome">
    <img src={iconHome} className={styles.imgIconHome} alt="Ícone de Login e Logout"/>
  </div>
);

IconHome.propTypes = {};

IconHome.defaultProps = {};

export default IconHome;
