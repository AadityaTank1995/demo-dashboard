import React, { useState } from 'react'

const Collapsible = (props) => {
  const [collapse, setCollapse] = useState("")
  const toggleCollapse = () => {
    (collapse === "") ? setCollapse(" open") : setCollapse("")
  }
  return (
    <>
      <li>
        <button onClick={toggleCollapse}>
          {props.name}
          { (collapse === "")
            ? <i className={"bi bi-chevron-right collapse-icon"}></i>
            : <i className={"bi bi-chevron-down collapse-icon"}></i>
          }
          </button>
        <div className={"collapse" + collapse}>
          {props.children}
        </div>
      </li>
    </>
  )
}

export default Collapsible
