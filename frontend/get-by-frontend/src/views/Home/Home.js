import React from 'react';
import styles from './Home.module.css';
import Logo from '../../components/Logo/Logo';
import LabelOQueQuerFazer from '../../components/LabelOQueQuerFazer/LabelOQueQuerFazer';
import ButtonAjudar from '../../components/ButtonAjudar/ButtonAjudar';
import ButtonReceberAjuda from '../../components/ButtonReceberAjuda/ButtonReceberAjuda';
import TopBar from '../../components/TopBar/TopBar';
import IconMoreInformation from '../../components/IconMoreInformation/IconMoreInformation';

const Home = () => (
  <div className={styles.divHome} data-testid="Home">
    <div className={styles.divTopBar}>
      <TopBar />
    </div>
    <div className={styles.divLogo}>
      <Logo />
    </div> 
    <div className={styles.divLabelOQueQuerFazer}>
      <LabelOQueQuerFazer />
    </div>
    <div className={styles.divButtons}>
      <ButtonAjudar />
      <ButtonReceberAjuda />
    </div>
    <div className={styles.divBottomBar}>
      <IconMoreInformation />
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
