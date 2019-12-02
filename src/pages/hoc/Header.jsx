import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      header
      {props.title}
    </div>
  )
}

export default React.memo(Header)