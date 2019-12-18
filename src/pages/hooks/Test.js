import React, { useState, useEffect, useLayoutEffect } from 'react'
import usePrevious from './usePrevious'

function Test(props) {
  let user = usePrevious(props.user)

  return (
    <div>{user} - {props.user}</div>
  )
}

export default Test