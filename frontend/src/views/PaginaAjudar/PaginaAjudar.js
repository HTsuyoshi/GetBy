import React, {useState} from 'react';
import styles from './PaginaAjudar.module.css';
import LabelExperiencia from '../../components/LabelExperiencia/LabelExperiencia';
import LabelQuandoVcEstava from '../../components/LabelQuandoVcEstava/LabelQuandoVcEstava';
import LabelOQTeAjudou from '../../components/LabelOQTeAjudou/LabelOQTeAjudou';
import SelecaoEmocao from '../../components/SelecaoEmocao/SelecaoEmocao';
import InputDica from '../../components/InputDica/InputDica';
import BotaoEnviar from '../../components/BotaoEnviar/BotaoEnviar';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const PaginaAjudar = () => {
  const [emocao, setEmocao] = useState(null);
  const [dica, setDica] = useState(null);
  console.log(emocao)

  const navigate = useNavigate();

  function changeDica(dica) {
    setDica(dica);
  }

  function changeEmocao(emocao) {
    setEmocao(emocao);
  }

  function submitDica() {
    console.log(emocao);
    const urlPostDica = 'http://localhost:8000/sugestao/';
    axios.defaults.headers.common['withCredentials'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = false;
    axios.post(urlPostDica, {
      id_usuario: -1,
      id_sugestao: 5,
      sentimento: emocao.toLowerCase(),
      sugestao: dica,
      feedback: 0,
      onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Allow-Cross-Origin'] = '*';
       proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:80';
       proxyRes.headers['Access-Control-Allow-Methods'] = '*';
       proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
       proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    }},{
       withCredentials: true
    }).then(function (response){
      console.log(response.response.status);
      if(response.response.status === 403) navigate('/login');
    }).catch(function (error) {
      if(error.response.status === 403) navigate('/login');
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
