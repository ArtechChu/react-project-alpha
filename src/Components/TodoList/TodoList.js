import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from '../../store/index';
import actionTypes from '../../store/actionTypes';
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
                    renderItem={(item, index) => (<List.Item onClick={()=>this.onDeleteItem(index)}>{item}</List.Item>)}
                    style={{marginTop:"10px", width:"400px"}}
                />
            </div>
        );
    }

    onDeleteItem =(index)=>{
        let action={
            type:actionTypes.DELETE_TODOITEM,
            index:index
        }
        store.dispatch(action);
    }
    onInputChanging=(e)=>{ //告诉ActionCreator要干什么事情
        const action = {
            type:actionTypes.CHANGE_INPUT_VALUE, //要干的事情
            value:e.target.value //需要传递的值
        }
        store.dispatch(action);
    }

    onStoreChanged = ()=>{
        this.setState(store.getState());
    }

    onAddButtonClicked = ()=>{
        let action = {
            type:actionTypes.ADD_TODOITEM,
        };
        store.dispatch(action);
    }
}

export default TodoList;