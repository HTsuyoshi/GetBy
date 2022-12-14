import React from 'react';
import styles from './Header.module.css';
import IconLogInOut from '../IconLogInOut/IconLogInOut';
import IconHome from '../IconHome/IconHome';

const Header = () => (
  <div className={styles.divHeader} data-testid="Header">
    <IconHome />
    <IconLogInOut />
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
