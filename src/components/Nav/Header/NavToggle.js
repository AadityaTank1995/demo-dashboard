import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';

const NavToggle = (props) => {
  const {state} = useContext(ThemeContext);
  const darkMode = state.isDark;
  
  return (
    <button className={ (darkMode ? "button-dark" : "button-light") + " mode-toggle nav-toggle" } onClick={() => props.navToggle("open")}>
      <i className="bi bi-list"></i>
    </button>
  )
}

export default NavToggle