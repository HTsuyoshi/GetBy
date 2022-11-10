import React from 'react';
import styles from './ButtonAjudar.module.css';
import { useNavigate } from "react-router-dom";

const ButtonAjudar = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/ajudar');  
  }

  return(
    <div className={styles.divButtonAjudar} data-testid="ButtonAjudar">
      <button className={styles.buttonAjudar} onClick={handleClick}>Ajudar</button>
    </div>
    )
};


ButtonAjudar.propTypes = {};

ButtonAjudar.defaultProps = {};

export default ButtonAjudar;
