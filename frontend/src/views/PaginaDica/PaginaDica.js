import React from 'react';
import styles from './PaginaDica.module.css';
import LabelSugestao from '../../components/LabelSugestao/LabelSugestao';
import LabelBaseadoNoQueEstaSentindo from '../../components/LabelBaseadoNoQueEstaSentindo/LabelBaseadoNoQueEstaSentindo';
import DivEmocao from '../../components/DivEmocao/DivEmocao';
import { useLocation } from 'react-router-dom';

const PaginaDica = (props) => {
  const location = useLocation();
  return (
    <div className={styles.divPaginaDica} data-testid="PaginaDica">
      <LabelSugestao />
      <LabelBaseadoNoQueEstaSentindo />
      <DivEmocao emocao={location.state}/>
    </div>
  )
};

PaginaDica.propTypes = {};

PaginaDica.defaultProps = {};

export default PaginaDica;
