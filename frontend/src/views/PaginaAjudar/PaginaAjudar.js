import React, {useState} from 'react';
import styles from './PaginaAjudar.module.css';
import LabelExperiencia from '../../components/LabelExperiencia/LabelExperiencia';
import LabelQuandoVcEstava from '../../components/LabelQuandoVcEstava/LabelQuandoVcEstava';
import LabelOQTeAjudou from '../../components/LabelOQTeAjudou/LabelOQTeAjudou';
import SelecaoEmocao from '../../components/SelecaoEmocao/SelecaoEmocao';
import InputDica from '../../components/InputDica/InputDica';
import BotaoEnviar from '../../components/BotaoEnviar/BotaoEnviar';
import axios from 'axios'

const PaginaAjudar = () => {
  const [emocao, setEmocao] = useState(null);
  const [dica, setDica] = useState(null);
  console.log(emocao)

  function changeDica(dica) {
    setDica(dica);
    console.log(dica);
  }

  function changeEmocao(emocao) {
    setEmocao(emocao);
    // TODO remover prox linha
    console.log(emocao);
  }

  function submitDica() {
    //TODO remover prox linha
    console.log("Submit Dica");
    const urlPostDica = 'http://localhost:8000/sugestao/';
    axios.post(urlPostDica, {
      id_usuario: 1,
      id_sugestao: 5,
      id_sentimento: 2,
      sugestao: dica,
      onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Allow-Cross-Origin'] = '*';
       proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:80';
       proxyRes.headers['Access-Control-Allow-Methods'] = '*';
       proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
       proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    }
    }).then(function (response){
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div className={styles.divPaginaAjudar} data-testid="PaginaAjudar">
      <LabelExperiencia />
      <LabelQuandoVcEstava />
      <SelecaoEmocao handleSelectChange={changeEmocao}/>
      <LabelOQTeAjudou />
      <InputDica handleInputChange={changeDica} />
      <BotaoEnviar handleButtonClick={submitDica}/>
    </div>
  );
}

PaginaAjudar.propTypes = {};

PaginaAjudar.defaultProps = {};

export default PaginaAjudar;
