import React, { Component } from 'react';
import store from '../../store/index';
import {getItemDeleteAction, getInputChangeAction, getItemAddAction, getItemInitAction} from '../../store/actionCreators';
import TodoListUI from '../../UI/TodoList/TodoListUI';
import axios from 'axios';
// import actionCreators from '../../store/actionCreators';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(()=>this.onStoreChanged());
    }

    render() {
        return <TodoListUI 
            inputValue={this.state.inputValue} 
            onInputChanging = {this.onInputChanging}
            onAddButtonClicked = {this.onAddButtonClicked}
            list = {this.state.list}
            onDeleteItem = {this.onDeleteItem}
        />;
    }
    componentDidMount(){
        axios.get('/list.json').then((res)=>{
            let data = res.data;
            let action = getItemInitAction(data)
            store.dispatch(action);
        }).catch((error)=>{console.log('访问失败')});
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