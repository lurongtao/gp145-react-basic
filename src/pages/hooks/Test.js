import React, { Component, PureComponent, Fragment } from 'react'
import memoize from 'memoize-one'

class Example extends Component {
  state = {
    filterText: "a",
  };

  // *******************************************************
  // 注意：这个例子不是建议的方法。
  // 下面的例子才是建议的方法。
  // *******************************************************

  // static getDerivedStateFromProps(props, state) {
  //   // 列表变化或者过滤文本变化时都重新过滤。
  //   // 注意我们要存储 prevFilterText 和 prevPropsList 来检测变化。
  //   if (
  //     props.list !== state.prevPropsList ||
  //     state.prevFilterText !== state.filterText
  //   ) {
  //     return {
  //       prevPropsList: props.list,
  //       prevFilterText: state.filterText,
  //       filteredList: props.list.filter(item => item.text.includes(state.filterText))
  //     };
  //   }
  //   return null;
  // }

  filter = memoize((filterText, list) => {
    console.log('memo')
    return list.filter(
      item => item.text.includes(filterText)
    )
  })

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const filteredList = this.filter(this.state.filterText, this.props.list)
    console.log(filteredList)

    return (
      <Fragment>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>{filteredList.map(item => <li key={item.id}>{item.text}</li>)}</ul>
      </Fragment>
    );
  }
}

export default Example