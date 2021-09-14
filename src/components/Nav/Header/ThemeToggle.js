import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeToggle = () => {
  const {dispatch, state} = useContext(ThemeContext);
  const darkMode = state.isDark;
  return (
    <button className={ (darkMode ? "button-dark" : "button-light") + " mode-toggle" } onClick={() => dispatch({"type" : "TOGGLE"})}>
      <i className="bi bi-circle-half"></i>
    </button>
  )
}

export default ThemeToggle
