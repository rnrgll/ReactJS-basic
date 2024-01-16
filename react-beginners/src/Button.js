import React from 'react'
import PropTypes from "prop-types";
//CSS module import
import styles from "./Button.module.css";



export default function Button({text, onClick}) {
  return (
    <button 
    className={styles.btn}
    onClick={onClick}
    >
        {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
