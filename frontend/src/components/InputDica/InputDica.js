import React from 'react';
import styles from './InputDica.module.css';

const InputDica = (props) => {
    function handleChange (event) {
        props.handleInputChange(event.target.value);
    }
    return (
        <input className={styles.inputDica} type="text" onChange={handleChange}/>
    );
}

InputDica.propTypes = {};

InputDica.defaultProps = {};

export default InputDica;
