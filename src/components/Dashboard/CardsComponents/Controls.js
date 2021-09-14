import React from 'react'

const Controls = (props) => {
  const {index, length, moveLeft, moveRight} = props
  return (
    <div className="controls">
      { (index > 0)
        && <button className="control-left" onClick={() => moveLeft(index)}>
          <i className="bi bi-chevron-left"></i>
        </button>
      }
      { (index < length-1 )
        && <button className="control-right" onClick={() => moveRight(index)}>
          <i className="bi bi-chevron-right"></i>
        </button>
      }
    </div>
  )
}

export default Controls
