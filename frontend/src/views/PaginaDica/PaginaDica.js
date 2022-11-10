import React from 'react';
import styles from './PaginaDica.module.css';
import LabelSugestao from '../../components/LabelSugestao/LabelSugestao';
import LabelBaseadoNoQueEstaSentindo from '../../components/LabelBaseadoNoQueEstaSentindo/LabelBaseadoNoQueEstaSentindo';
import DivEmocao from '../../components/DivEmocao/DivEmocao';

const PaginaDica = () => (
  <div className={styles.divPaginaDica} data-testid="PaginaDica">
    <LabelSugestao />
    <LabelBaseadoNoQueEstaSentindo />
    <DivEmocao />
  </div>
);

PaginaDica.propTypes = {};

PaginaDica.defaultProps = {};

export default PaginaDica;
