import React from 'react'
function Memo(props) {
  console.log(0)
  return (
    <div>{props.title}</div>
  )
}

export default React.memo(Memo)