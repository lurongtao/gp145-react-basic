import React, { useState, useEffect } from 'react'

// export default class Counter extends Component {
//   state = {
//     count: 0
//   }

//   handleClick = () => {
//     this.setState(state => {
//       return {
//         count: state.count + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <>
//         <div>{this.state.count} <button onClick={this.handleClick}>+</button></div>
//       </>
//     )
//   }
// }

// export default props => {
//   let [count2, setCount2] = useState({num: 0})

//   let handleClick = () => {
//     setCount2({
//       num: count2.num + 1
//     })
//   }

//   return (
//     <>
//       <div>{ count2.num } <button onClick={handleClick}>+</button></div>
//     </>
//   )
// }

// export default class Counter extends Component {
//   state = {
//     count: 0
//   }

//   componentDidMount() {
//     document.title = this.state.count
//     this.timer = setInterval(() => {
//       this.setState((state) => {
//         return {
//           count: state.count + 1
//         }
//       })
//     }, 1000)
//   }

//   componentDidUpdate() {
//     document.title = this.state.count
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => clearInterval(this.timer)}>clear</button>
//       </div>
//     )
//   }
// }

export default (props) => {
  let [count, setCount] = useState(0)

  // handleClick = () => {
  //   setCount(count+1)
  // }

  let x = 6

  useEffect(() => {

    document.title = count
    let timer = setInterval(() => {
      setCount(count+1)
    }, 1000)
   
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    console.log('a')
    document.title = count
  }, [count])

  return (
    <div>
      <button onClick={() => clearInterval(this.timer)}>clear</button>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}