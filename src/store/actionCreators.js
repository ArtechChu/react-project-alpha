import actionTypes from './actionTypes';


export const getItemInitAction = (list) => ({
    type: actionTypes.Init_TODOITEM,
    data:list
});

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

export const getItemInit = ()=>({
    type:actionTypes.GET_INIT_ITEM
})

