import actionTypes from './actionTypes';
const defaultState = {
    inputValue:'',
    list:[1,2,3]
};

export default (state = defaultState, action) => { //action表示用户传过来的那句话，state表示store上一次存储数据
    if(action.type===actionTypes.CHANGE_INPUT_VALUE){
        //reducer的一个缺陷：reducer可以接收state，但不能修改state，所以这里要用return newState
        const newState = JSON.parse(JSON.stringify(state));//深拷贝
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type===actionTypes.ADD_TODOITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type===actionTypes.DELETE_TODOITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type===actionTypes.Init_TODOITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list= action.data.map(ent=>ent.email);
        return newState;
    }
    
    return state;
}