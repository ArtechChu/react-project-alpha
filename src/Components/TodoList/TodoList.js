import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from '../../store/index';
import {getItemDeleteAction, getInputChangeAction, getItemAddAction} from '../../store/actionCreators';
// import actionCreators from '../../store/actionCreators';

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
                    value={this.state.inputValue} 
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
        // let action= actionCreators.getItemDeleteAction(index);
        let action= getItemDeleteAction(index);
        store.dispatch(action);
    }
    onInputChanging=(e)=>{ //告诉ActionCreator要干什么事情
        // const action = actionCreators.getInputChangeAction(e.target.value);
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    onStoreChanged = ()=>{
        this.setState(store.getState());
    }

    onAddButtonClicked = ()=>{
        // let action = actionCreators.getItemAddAction();
        let action = getItemAddAction();
        store.dispatch(action);
    }
}

export default TodoList;