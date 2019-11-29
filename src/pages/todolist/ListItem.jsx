import React from 'react'

export default (props) => {
  return (
    <li>
      {props.value} 
      <button onClick={props.onItemClick.bind(this, props.index)}>X</button>
    </li>
  )
}