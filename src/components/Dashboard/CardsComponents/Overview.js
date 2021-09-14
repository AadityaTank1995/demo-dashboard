import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext';
import Controls from './Controls';

const Overview = (props) => {
  const {state} = useContext(ThemeContext);
  const darkMode = state.isDark;
  return (
    <div className="card">
      <Controls {...props}/>
      <div className="Overview">
        <h1 className="overview-figure">182<span>/210</span></h1>
        <p className="overview-label">Your Progress</p>
        <div className="overview-options">
          <button className={darkMode ? "dark" : ""}><i className="bi bi-award-fill"></i></button>
          <button className={darkMode ? "dark" : ""}><i className="bi bi-bar-chart-fill"></i></button>
          <button className={darkMode ? "dark" : ""}><i className="bi bi-bell-fill"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Overview
