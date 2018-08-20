import React, { Component, Fragment } from 'react';
import FocusInput from './FocusInput';
class App extends Component {
  state = {
    list: [],
    inputValue:''
  }

  render() {
    return (
      <Fragment>
        <input type="text" onChange={this.inputHandler.bind(this)} value={this.state.inputValue}/>
        <button onClick={() => this.addItem()}>添加</button>
        <ul>
          {
            this.state.list.map((li, index) => {
              return (
                <li key={index} dangerouslySetInnerHTML={{ __html: li }}></li>
              )
            })
          }
        </ul>
        <FocusInput />
      </Fragment>
    );
  }

  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  addItem = () => {
    let list = [...this.state.list, this.state.inputValue];
    this.setState({
      list: list,
      inputValue: ''
    })
  }
}
export default App;
