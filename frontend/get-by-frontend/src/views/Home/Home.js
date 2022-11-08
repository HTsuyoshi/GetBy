import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Logo from '../../components/Logo/Logo';
import LabelComoEstaHoje from '../../components/LabelComoEstaHoje/LabelComoEstaHoje';
import LabelOQueQuerFazer from '../../components/LabelOQueQuerFazer/LabelOQueQuerFazer';
import ButtonAjudar from '../../components/ButtonAjudar/ButtonAjudar';
import ButtonReceberAjuda from '../../components/ButtonReceberAjuda/ButtonReceberAjuda';
import TopBar from '../../components/TopBar/TopBar';
import IconMoreInformation from '../../components/IconMoreInformation/IconMoreInformation';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    Home Component
    <Logo /> 
    <LabelComoEstaHoje />
    <LabelOQueQuerFazer />
    <ButtonAjudar />
    <ButtonReceberAjuda />
    <TopBar />
    <IconMoreInformation />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
