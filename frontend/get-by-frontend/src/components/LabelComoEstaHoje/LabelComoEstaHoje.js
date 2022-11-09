import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabelComoEstaHoje.module.css';

const LabelComoEstaHoje = () => (
  <label className={styles.labelComoEstaHoje}>Como você está se sentindo hoje?</label>
);

LabelComoEstaHoje.propTypes = {};

LabelComoEstaHoje.defaultProps = {};

export default LabelComoEstaHoje;
