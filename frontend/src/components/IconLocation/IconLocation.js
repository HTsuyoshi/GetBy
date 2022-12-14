import React from 'react';
import styles from './IconLocation.module.css';
import iconLocation from '../../assets/IconeLocalizacao.png';
import { useNavigate } from "react-router-dom";

const IconLocation = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/mapa');  
  }

  return (
    <div className={styles.divIconLocation} data-testid="IconLocation">
      <img src={iconLocation} className={styles.imgIconLocation} alt="Ícone de Login e Logout" onClick={handleClick}/>
    </div>
  )
};

IconLocation.propTypes = {};

IconLocation.defaultProps = {};

export default IconLocation;
