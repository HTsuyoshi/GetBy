import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';

const Logo = () => (
  <div className={styles.Logo} data-testid="Logo">
    Logo Component
  </div>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
