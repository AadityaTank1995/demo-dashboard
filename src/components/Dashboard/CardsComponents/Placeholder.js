import React from 'react'
import Controls from './Controls'

const Placeholder = (props) => {
  return (
    <div className="card">
      <Controls {...props}/>
      <h1 className="card-title placeholder">Placeholder</h1>
    </div>
  )
}

export default Placeholder
