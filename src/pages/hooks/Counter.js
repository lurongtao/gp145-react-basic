import React, { useState, useCallback, useMemo } from 'react'
import Test from './Test'

const Counter = props => {
  let [count, setCount] = useState(0)
  
  let [list, setList] = useState([{
    id: '001',
    text: 'aaa'
  }, {
    id: '002',
    text: 'bbb'
  }, {
    id: '003',
    text: 'ccc'
  }])

  let [title, setTitle] = useState('hello')

  let handleClick = useMemo(() => {
    return () => {
      setCount( count => count + 1 )
    }
  }, [])

  // let MyTest = useMemo(() => <Test title={title} onMyClick={handleClick}></Test>, [title, handleClick])

  return (
    <div>
      <Test list={list}></Test>
      <div>{count}</div>
      <div><button onClick={() => setList(list => {
        return [
          ...list,
          {
            id: '004',
            text: 'ddd'
          }
        ]
      })}>click</button></div>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  )
}

export default Counter