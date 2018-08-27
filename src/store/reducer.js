const defaultState = {
    inputValue:'',
    list:[1,2,3]
};

export default (state = defaultState, action) => { //action表示用户传过来的那句话，state表示store上一次存储数据
    if(action.type==='change_input_value'){
        //reducer的一个缺陷：reducer可以接收state，但不能修改state，所以这里要用return newState
        const newState = JSON.parse(JSON.stringify(state));//深拷贝
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type==='add_todoItem'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }
    if(action.type==='delete_todoItem'){
        const newState = JSON.parse(JSON.stringify(state));
        
        newState.list.splice(action.index,1);
        
        return newState;
    }
    
    return state;
}