import React from 'react';
import styles from './PaginaAtendimento.module.css';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import InputDica from '../../components/InputDica/InputDica';
import LabelTextoRoxo from '../../components/LabelTextoRoxo/LabelTextoRoxo';
import ButtonAmarelo from '../../components/ButtonAmarelo/ButtonAmarelo';

const PaginaAtendimento = () => {

  function handleInputAtendimentoChange (inputValue) {
    console.log(inputValue);
  }
  function submitPedidoAtendimento () {
    document.getElementById("div-formulario").style.display = "none";
    document.getElementById("div-formulario-enviado").style.display = "block";

  }
  return (
    <div className={styles.divPaginaAtendimento} data-testid="PaginaAtendimento">
      <LabelTituloAmarelo titulo={"Atendimento"} />
      <div id="div-formulario"className={styles.divFormulario} data-testid="PaginaAtendimento">
        <LabelInput texto={"O que está sentindo?"}/>
        <InputDica handleInputChange={handleInputAtendimentoChange} />
        <LabelTextoRoxo texto={"Para um atendimento mais assertivo, escreva a situação com detalhes."}/>
        <ButtonAmarelo texto={"Enviar"} handleButtonClick={submitPedidoAtendimento}/>
      </div>
      <div id="div-formulario-enviado" className={styles.divFormularioEnviado} data-testid="PaginaAtendimento">
        <LabelInput texto={"Obrigada por compartilhar!"}/>
        <LabelTextoRoxo texto={"Logo menos um profissional entrará em contato com você :)"}/>
      </div>
    </div>
  )
};

PaginaAtendimento.propTypes = {};

PaginaAtendimento.defaultProps = {};

export default PaginaAtendimento;
