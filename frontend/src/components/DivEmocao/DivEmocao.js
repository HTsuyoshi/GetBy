import React from 'react';
import styles from './DivEmocao.module.css';
import IconAngry from '../IconAngry/IconAngry';
import IconHappy from '../IconHappy/IconHappy';
import IconSad from '../IconSad/IconSad';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';
import ButtonRoxo from '../../components/ButtonRoxo/ButtonRoxo';
import { useNavigate } from "react-router-dom";

const DivEmocao = (props) => {
  const navigate = useNavigate();

  function handleButtonNaoAjudouClicked() {
    navigate('/atendimento')
  }
  
  function handleButtonAjudouClicked() {
    navigate('/')
  }
  return (
    <div className={styles.divEmocao} data-testid="DivEmocao">
      {/* TODO      Ícone     Label    Emocao  */}
      {(props.emocao === "bravo") ? <IconAngry /> : null}
      {(props.emocao === "feliz") ? <IconHappy /> : null}
      {(props.emocao === "triste") ? <IconSad /> : null}
     <label className={styles.labelDescricao}>
        Sugestão
      </label>
      <label className={styles.labelDescricao}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      </label>
      <div className={styles.divButtons}>
        <ButtonRoxo texto={"Não ajudou"}  handleButtonClick={handleButtonNaoAjudouClicked}/>
        <ButtonAmarelo texto={"Ajudou"} handleButtonClick={handleButtonAjudouClicked}/>
      </div>    
    </div>
  )
};

DivEmocao.propTypes = {};

DivEmocao.defaultProps = {};

export default DivEmocao;
