import React from 'react';
import styles from './TopBar.module.css';
import IconLogInOut from '../IconLogInOut/IconLogInOut';

const TopBar = () => (
  <div className={styles.divTopBar} data-testid="TopBar">
    <IconLogInOut />
  </div>
);

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;
