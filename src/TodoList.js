import React from 'react';
import { connect } from 'react-redux';
import { getAddItemAction, getChangeInputValueAction, getDeleteItemAction } from './store/actionCreators';
const TodoList = (props) => {
    const { inputValue, list, changeInputValue, addItem, deleteItem } = props;
    return (
        <div>
            <div>
                <input type="text"
                    value={inputValue}
                    onChange={(e) => changeInputValue(e)} //指的是 mapDispatchToProps 中的 changeInputValue 方法
                />
                <button onClick={() => addItem()}>提交</button>
            </div>
            <div>
                <ul>
                    {list.map((item, index) => {
                        return <li onClick={() => deleteItem(index)} key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    };
}
//store.dispatch方法挂载到了这个方法中
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getChangeInputValueAction(e.target.value);
            dispatch(action);
        },
        addItem() {
            const action = getAddItemAction();
            dispatch(action);
        },
        deleteItem(index) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
}
//connect 表示将 TodoList同store做连接
//怎么做连接？（即连接的规则）：在 mapStateToProps中 进行映射
//如果想对store中的数据做修改，则通过 mapDispatchToProps 来进行
//connect执行返回的结果其实是一个容器组件，把相关的业务逻辑全部都整合到了UI组件中了。
//导出的其实是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList); 