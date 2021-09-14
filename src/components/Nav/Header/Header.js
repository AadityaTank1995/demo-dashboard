import React, { useContext } from 'react'
import icon_light from "../../../media/icon_light_.jpg"
import icon_dark from "../../../media/icon_dark.jpg"
import { ThemeContext } from '../../../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import NavToggle from './NavToggle';

const Header = (props) => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.isDark;
  return (
    <header className="nav-header">
      <img src={ darkMode ? icon_dark : icon_light } alt="Fujifilm Logo" className="main-logo" />
      <NavToggle {...props}/>
      <ThemeToggle/>
    </header>
  )
}

export default Header
