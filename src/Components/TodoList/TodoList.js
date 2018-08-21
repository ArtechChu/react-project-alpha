import React, { Component, Fragment } from 'react';
import TodoItems from './TodoItem/TodoItem';
class TodoList extends Component {
    state = {
        list: [],
        inputValue: ''
    }

    render() {
        return (
            <Fragment>
                <label htmlFor="inputItem">输入内容</label>
                <input id="inputItem" type="text" onChange={(e) => this.inputHandler(e)} value={this.state.inputValue} />
                <button onClick={() => this.addItemHandler()}>添加</button>
                <ul>
                    <TodoItems items={this.state.list} deleteItemHandler={this.deleteItemHandler} />
                </ul>

            </Fragment>
        );
    }

    inputHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    addItemHandler = () => {
        let list = [...this.state.list, this.state.inputValue];
        this.setState({
            list: list,
            inputValue: ''
        })
    }

    deleteItemHandler = (index) => {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }

}

export default TodoList;