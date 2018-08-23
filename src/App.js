import React, { Component, Fragment } from 'react';
import TodoList from './Components/TodoList/TodoList';
import { CSSTransition } from 'react-transition-group';
import './App.css';
class App extends Component {
  state={
    show:true
  }
  render() {
    return (
      <Fragment>
        <TodoList />
        <CSSTransition 
          in={this.state.show} 
          timeout={1000} 
          classNames='fade' 
          unmountOnExit 
          onEntered={(el)=>{el.style.color='red'}}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.toggleHandler}>CSSTransition</button>
      </Fragment>
    );
  }

  toggleHandler = ()=>{
    let isShow = this.state.show;
    this.setState({
      show:!isShow
    });
  }

}
export default App;
