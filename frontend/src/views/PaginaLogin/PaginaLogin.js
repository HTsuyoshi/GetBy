import React, {useState} from 'react';
import styles from './PaginaLogin.module.css';
import LabelTituloAmarelo from '../../components/LabelTituloAmarelo/LabelTituloAmarelo';
import LabelInput from '../../components/LabelInput/LabelInput';
import LabelTextoRoxo from '../../components/LabelTextoRoxo/LabelTextoRoxo';
import LabelTextoAmarelo from '../../components/LabelTextoAmarelo/LabelTextoAmarelo';
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
      <Input handleInputChange={changeUsuario} />
      <LabelInput textoLabel={"Senha"} />
      <Input handleInputChange={changeUsuario} />
      <div className={styles.divLabelsRoxaEAmarela}>
        <LabelTextoRoxo texto={"Ainda não tem uma conta?"} />
        <LabelTextoAmarelo texto={"Clique aqui"} />
      </div>
      <div className={styles.divLabelsRoxaEAmarela}>
        <LabelTextoRoxo texto={"Esqueceu sua senha?"} />
        <LabelTextoAmarelo texto={"Clique aqui"} />
      </div>  
    </div>
  )
};

PaginaLogin.propTypes = {};

PaginaLogin.defaultProps = {};

export default PaginaLogin;
