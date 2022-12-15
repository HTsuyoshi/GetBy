import React, { useState, useEffect } from 'react';
import styles from './PaginaValidacao.module.css';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import LabelTextoRoxo from '../../components/LabelTextoRoxo/LabelTextoRoxo';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';
import ButtonRoxo from '../../components/ButtonRoxo/ButtonRoxo';

const PaginaValidacao = () => {
  const [idSugestao, setIdSugestao] = useState("#0");
  const [textoSugestao, setTextoSugestao] = useState("#Recomendamos essa recomendação para você");

  useEffect(() => {
    setIdSugestao("#1")
  })
  useEffect(() => {
    setTextoSugestao("Quando estiver triste, converse com seu psicólogo ou amigo sobre o que te deixou com esse sentimento. Aproveite e busque assistir um filme de comédia para ajudar um pouco no humor.")
  })

  function handleButtonInvalidoClicked() {
    alert("Recomendação não aprovada")
  }

  function handleButtonValidoClicked() {
    alert("Recomendação aprovada")
  }

  return (
    <div className={styles.divPaginaValidacao} data-testid="PaginaValidacao">
      <LabelTituloAmarelo titulo={"Recomendações"} />
      <LabelInput texto={idSugestao}/>
      <LabelTextoRoxo texto={textoSugestao}/>
      <div className={styles.divButtons}>
        <ButtonRoxo texto={"Inválido"}  handleButtonClick={handleButtonInvalidoClicked}/>
        <ButtonAmarelo texto={"Válido"} handleButtonClick={handleButtonValidoClicked}/>
      </div>
    </div>
  )
};

PaginaValidacao.propTypes = {};

PaginaValidacao.defaultProps = {};

export default PaginaValidacao;
