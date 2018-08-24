import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from '../../store/index';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(()=>this.onStoreChanged());
    }

    render() {
        return (
            <div>
                <Input 
                    placeholder="请输入item" 
                    style={{ width: "400px" }} 
                    defaultValue={this.state.inputValue} 
                    onChange={(e)=>this.onInputChanging(e)}
                />
                <Button type="primary" onClick={()=>this.onAddButtonClicked()}>确定</Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                    style={{marginTop:"10px", width:"400px"}}
                />
            </div>
        );
    }

    onInputChanging=(e)=>{ //告诉ActionCreator要干什么事情
        const action = {
            type:"change_input_value", //要干的事情
            value:e.target.value //需要传递的值
        }
        store.dispatch(action);
    }

    onStoreChanged = ()=>{
        this.setState(store.getState());
    }

    onAddButtonClicked = ()=>{
        let action = {
            type:'add_todoItem',
        };
        store.dispatch(action);
    }
}

export default TodoList;