import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import Collapsible from './Collapsible';
import Header from './Header/Header'
import "./Nav.scss";

const Nav = () => {
  const {state} = useContext(ThemeContext);
  const darkMode = state.isDark;
  const [navOpen, setNavOpen] = useState("closed")

  const navToggle = newState => {
    ( newState === "close" ) ? setNavOpen("closed") : setNavOpen("open")
  }

  return (
    <div className="main-nav-container">
      <Header navToggle={navToggle}></Header>
      <nav className={ (darkMode ? "main-nav dark" : "main-nav") + " " + navOpen }>
        <button 
          className={ (darkMode ? "button-dark" : "button-light") + " mode-toggle close-button" } 
          onClick={() => navToggle("close")}>
          <i className="bi bi-x-lg"></i>
        </button>
        <input className="nav-search" type="text" placeholder="Search"/>
        <ul>
          <li className="nav-active-link"><a  href="/">Dashboard</a></li>
          <Collapsible name="Products">
            <ul className="sub-nav">
              <li>XT Series</li>
              <li>GX Series</li>
              <li>SX Series</li>
            </ul>
          </Collapsible>
          <li><a href="/">Orders</a></li>
          <li><a href="/">Analytics</a></li>
          <li><a href="/">Reports</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
