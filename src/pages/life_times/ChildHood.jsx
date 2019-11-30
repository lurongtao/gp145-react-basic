import _ from 'lodash'
import React from 'react'
import './childhood.css'
export default class ScrollingList extends React.Component {
  state = {
    list: _.range(50)
  }

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 我们是否在 list 中添加新的 items ？
    // 捕获滚动​​位置以便我们稍后调整滚动位置。
    if (prevState.list.length < this.state.list.length) {
      const list = this.listRef.current;
      console.log(list.scrollHeight)
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    if (snapshot !== null) {
      const list = this.listRef.current;
      console.log(list.scrollHeight)
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState) => {
        return ({
          list: [
            ...prevState.list,
            ..._.range(100, 120)
          ]
        })
      })
    }, 5000)

    // this.listRef.current.addEventListener('scroll', () => {
    //   console.log(this.listRef.current.scrollTop)
    // }, false)
  }

  render() {
    return (
      <div ref={this.listRef} style={{'overflowY': 'scroll', height: '100%'}}>
        <ul>
          {
            this.state.list.map((value, index) => {
              return (
                <li key={value+index}>{value}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}