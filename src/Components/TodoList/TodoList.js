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
                    {/* <input id="inputItem" type="text" onChange={(e) => this.inputHandler(e)} value={this.state.inputValue} /> */}
                    <input ref={(input)=>this.input = input} id="inputItem" type="text" onChange={(e) => this.inputHandler(e)} value={this.state.inputValue} />
                    <button onClick={() => this.addItemHandler()}>添加</button>
                </div>
                <div>
                    <ul ref={(ul)=>this.ul=ul}>
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
            return <TodoItems test={null} item={item} index={index} deleteItem={this.deleteItemHandler} key={item + "_" + index} />
        })

    }

    // inputHandler = (e) => {
    //     let value = e.target.value;
    //     this.setState(() => {
    //         return {inputValue: value};
    //     })
    // }
    inputHandler = () => {
        let value = this.input.value;
        this.setState(() => {
            return {inputValue: value};
        })
        
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ""
            }
        },()=>{
            console.log(this.ul.querySelectorAll('li').length);
        })
    }

    deleteItemHandler = (index) => {
        this.setState((prevState)=>{
            let list = [...prevState.list];
            list.splice(index, 1);
           return { list:list};
        });
    }

}

export default TodoList;