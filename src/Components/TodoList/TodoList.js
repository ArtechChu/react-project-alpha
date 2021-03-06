import React, { Component, Fragment } from 'react';
import TodoItems from './TodoItem/TodoItem';
import axios from 'axios';
class TodoList extends Component {
    state = {
        list: [],
        inputValue: ''
    }
    // componentDidMount(){
    //     axios.get('http://localhost:3000/api/Config/GetToken?salePlatformId=A7ADFD50-9B95-466C-A617-283C58055466')
    //     .then((res)=>{ console.log(res)})
    //     .catch((error)=>{ console.log(error)})
    // }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputItem">输入内容</label>
                    {/* <input id="inputItem" type="text" onChange={(e) => this.inputHandler(e)} value={this.state.inputValue} /> */}
                    <input id="inputItem" type="text" onChange={(e) => this.inputHandler(e)} value={this.state.inputValue} />
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

    inputHandler = (e) => {
        let value =e.target.value;
        // this.setState(() => {
        //     return {inputValue: value};
        // })
        this.setState({inputValue: value})
        
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