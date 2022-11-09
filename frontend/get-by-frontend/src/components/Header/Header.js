import React from 'react';
import styles from './Header.module.css';
import IconLogInOut from '../IconLogInOut/IconLogInOut';

const Header = () => (
  <div className={styles.divHeader} data-testid="Header">
    <IconLogInOut />
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
