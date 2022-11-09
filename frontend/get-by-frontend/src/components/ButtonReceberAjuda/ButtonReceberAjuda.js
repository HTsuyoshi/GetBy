import React from 'react';
import styles from './ButtonReceberAjuda.module.css';
import { useNavigate } from "react-router-dom";




const ButtonReceberAjuda = () => {
  const navigate = useNavigate();


function handleClick() {
  navigate('/buscarAjuda');
}

  return(
    <div className={styles.divReceberAjuda} data-testid="ButtonReceberAjuda">
      <button className={styles.buttonReceberAjuda} onClick={handleClick}>Receber ajuda</button>
    </div>
    )
};



ButtonReceberAjuda.propTypes = {};

ButtonReceberAjuda.defaultProps = {};

export default ButtonReceberAjuda;
