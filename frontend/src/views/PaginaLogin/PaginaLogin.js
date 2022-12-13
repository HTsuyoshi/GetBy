import React, {useState} from 'react';
import styles from './PaginaLogin.module.css';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import Input from '../../components/Input/Input';

const PaginaLogin = () => {
  const [usuario, setUsuario] = useState(null);
  console.log(usuario);
  function changeUsuario(userInput) {
    setUsuario(userInput);
  }
  return (
    <div className={styles.PaginaLogin} data-testid="PaginaLogin">
      <LabelTituloAmarelo titulo={"Login"}/>
      <LabelInput textoLabel={"Usuário"} />
      <LabelInput textoLabel={"Senha"} />
      <Input handleInputChange={changeUsuario} />
    </div>
  )
};

PaginaLogin.propTypes = {};

PaginaLogin.defaultProps = {};

export default PaginaLogin;
