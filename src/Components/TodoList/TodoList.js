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
                <div>
                    <label htmlFor="inputItem">输入内容</label>
                    <input id="inputItem" type="text" onChange={(e) => this.inputHandler(e)} value={this.state.inputValue} />
                    <button onClick={() => this.addItemHandler()}>添加</button>
                </div>
                <div>
                    <ul>
                        {
                            this.getTodoItems()
                        }
                    </ul>
                </div>

            </Fragment>
        );
    }

    getTodoItems = () => {
        return this.state.list.map((item, index) => {
            return <TodoItems item={item} index={index} deleteItem={this.deleteItemHandler} key={item + "_" + index} />
        })

    }

    inputHandler = (e) => {
        let value = e.target.value;
        this.setState(() => {
            return {inputValue: value};
        })
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        })
    }

    deleteItemHandler = (index) => {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState(()=>({list:list}));
    }

}

export default TodoList;