import React from 'react';
import styles from './Footer.module.css';
import IconMoreInformation from '../IconMoreInformation/IconMoreInformation.js';

const Footer = () => (
  <div className={styles.divFooter} data-testid="Footer">
    <IconMoreInformation />
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
