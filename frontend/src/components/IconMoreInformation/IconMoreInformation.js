import React from 'react';
import styles from './IconMoreInformation.module.css';
import iconeMoreInfo from '../../assets/IconeMoreInfo.svg';

const IconMoreInformation = () => (
  <img title={"Mais informações"} src={iconeMoreInfo} className={styles.imgIcon} alt="Ícone de Mais Informações"/>
);

IconMoreInformation.propTypes = {};

IconMoreInformation.defaultProps = {};

export default IconMoreInformation;
