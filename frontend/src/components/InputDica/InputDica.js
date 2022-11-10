import React from 'react';
import styles from './InputDica.module.css';

const InputDica = () => {
    function handleChange() {
        
    } 

    return (
        <input className={styles.inputDica} type="text" onChangeText={handleChange}/>
    );
}

InputDica.propTypes = {};

InputDica.defaultProps = {};

export default InputDica;
