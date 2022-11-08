import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopBar.module.css';
import IconLogInOut from './IconLogInOut/IconLogInOut';

const TopBar = () => (
  <div className={styles.TopBar} data-testid="TopBar">
    TopBar Component
    <IconLogInOut />
  </div>
);

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;
