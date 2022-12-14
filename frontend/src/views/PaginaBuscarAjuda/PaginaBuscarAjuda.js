import React from 'react';
import styles from './PaginaBuscarAjuda.module.css';
import LabelEmocoes from '../../components/LabelEmocoes/LabelEmocoes';
import LabelTextoRoxo from '../../components/LabelTextoRoxo/LabelTextoRoxo';
import IconHappy from '../../components/IconHappy/IconHappy';
import IconAngry from '../../components/IconAngry/IconAngry';
import IconSad from '../../components/IconSad/IconSad';
import { Link } from "react-router-dom"

const PaginaBuscarAjuda = () => {
  const bravo = "bravo";
  const feliz = "feliz";
  const triste = "triste";

  return (
    <div className={styles.divPaginaBuscarAjuda} data-testid="PaginaBuscarAjuda">
      <div className={styles.divLabelEmocoes}>
        <LabelEmocoes />
      </div>
      <div className={styles.divLabelTextoRoxo}>
        <LabelTextoRoxo texto={"Como você está se sentindo hoje?"}/>
      </div>
      <div className={styles.divIconesEmocoes}>
        <Link to="/paginaDica" state={feliz} className={styles.linkMudaPagina}>
          <IconHappy />
        </Link>
        <Link to="/paginaDica" state={bravo} className={styles.linkMudaPagina}>
          <IconAngry />
        </Link>
        <Link to="/paginaDica" state={triste} className={styles.linkMudaPagina}>
          <IconSad />
        </Link>
      </div>  
    </div>
  )
};

PaginaBuscarAjuda.propTypes = {};

PaginaBuscarAjuda.defaultProps = {};

export default PaginaBuscarAjuda;
