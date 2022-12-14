import React from 'react';
import styles from './IconLogInOut.module.css';
import iconeLogInOut from '../../assets/IconeLogInOut.svg'
import { useNavigate } from "react-router-dom";

const IconLogInOut = () => { 
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');  
  }

  return (
      <img src={iconeLogInOut} className={styles.imgIcon} alt="Ícone de Login e Logout" onClick={handleClick}/>
  )
};

IconLogInOut.propTypes = {};

IconLogInOut.defaultProps = {};

export default IconLogInOut;
