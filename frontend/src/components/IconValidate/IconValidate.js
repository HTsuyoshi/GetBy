import React from 'react';
import styles from './IconValidate.module.css';
import IconeCarimbo from '../../assets/IconeCarimbo.png';
import { useNavigate } from "react-router-dom";

const IconValidate = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/validacao');  
  }

  return(
    <img title={"Validar Sugestões"} src={IconeCarimbo} className={styles.imgIcon} alt="Ícone de Carimbo para acesso à página de validação" onClick={handleClick}/>
  )
};

IconValidate.propTypes = {};

IconValidate.defaultProps = {};

export default IconValidate;
