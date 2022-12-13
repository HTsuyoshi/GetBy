import React from 'react';
import styles from './Home.module.css';
import Logo from '../../components/Logo/Logo';
import LabelTextoAmarelo from '../../components/LabelTextoAmarelo/LabelTextoAmarelo';
import ButtonAjudar from '../../components/ButtonAjudar/ButtonAjudar';
import ButtonReceberAjuda from '../../components/ButtonReceberAjuda/ButtonReceberAjuda';

const Home = () => (
  <div className={styles.divHome} data-testid="Home">
    <div className={styles.divLogo}>
      <Logo />
    </div> 
    <div className={styles.divLabelTextoAmarelo}>
      <LabelTextoAmarelo texto={"O que você quer fazer?"} />
    </div>
    <div className={styles.divButtons}>
      <ButtonAjudar />
      <ButtonReceberAjuda />
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
