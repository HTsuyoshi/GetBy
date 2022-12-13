import React from 'react';
import styles from './Home.module.css';
import Logo from '../../components/Logo/Logo';
import LabelTextoAmarelo from '../../components/LabelTextoAmarelo/LabelTextoAmarelo';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';
import ButtonReceberAjuda from '../../components/ButtonReceberAjuda/ButtonReceberAjuda';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  function navegaPaginaAjudar() {
      navigate('/ajudar');  
  }
  return(
    <div className={styles.divHome} data-testid="Home">
      <div className={styles.divLogo}>
        <Logo />
      </div> 
      <div className={styles.divLabelTextoAmarelo}>
        <LabelTextoAmarelo texto={"O que você quer fazer?"} />
      </div>
      <div className={styles.divButtons}>
        <ButtonAmarelo texto={"Ajudar"} handleButtonClick={navegaPaginaAjudar}/>
        <ButtonReceberAjuda />
      </div>
    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
