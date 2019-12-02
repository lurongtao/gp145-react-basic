import React, { createContext, Component } from 'react'

const colorContext = createContext()

const {
  Provider,
  Consumer: MyConsumer
} = colorContext

// let { Provider, Consumer } = colorContext

// export {
//   Provider,
//   Consumer
// }

// export default colorContext

class MyProvider extends Component {
  constructor() {
    super()
    this.state = {
      color: 'red'
    }
  }

  changeColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    return (
      <Provider
        value={{
          color: this.state.color,
          changeColor: this.changeColor
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  MyProvider,
  MyConsumer,
  colorContext
}