import actionTypes from './actionTypes';
import axios from 'axios';

export const getTodoList = ()=>{
    return (dispatch)=>{ //在action creators中，可以直接接收到 store的dispatch方法
        axios.get('/list.json').then((res)=>{
            let data = res.data;
            let action = getItemInitAction(data)  //直接使用本方法
            dispatch(action);
        }).catch((error)=>{console.log(error)});
    }
}

//需要注意，这里的箭头函数，外层需要用圆括号包起来
export const getInputChangeAction = value => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value
});

//如果不用圆括号的话，可以在花括号内部再用一个花括号来进行返回
export const getItemDeleteAction = index => {
    return {
        type: actionTypes.DELETE_TODOITEM,
        index
    };
};

export const getItemAddAction = () => ({
    type: actionTypes.ADD_TODOITEM
});

export const getItemInitAction = (list) => ({
    type: actionTypes.Init_TODOITEM,
    data:list
});

