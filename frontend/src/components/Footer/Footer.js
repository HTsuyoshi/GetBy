import React from 'react';
import styles from './Footer.module.css';
import IconMoreInformation from '../IconMoreInformation/IconMoreInformation.js';
import IconValidate from '../IconValidate/IconValidate.js';
import IconLocation from '../IconLocation/IconLocation';

const Footer = () => (
  <div className={styles.divFooter} data-testid="Footer">
    <IconLocation />
    <IconValidate />
    <IconMoreInformation />
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
