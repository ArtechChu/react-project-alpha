import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAddItemAction, getChangeInputValueAction, getDeleteItemAction } from './store/actionCreators';
class TodoList extends Component {

    render() {
        const { inputValue, list, changeInputValue, addItem, deleteItem } = this.props;
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
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    };
}
//store.dispatch方法挂到了
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
//怎么做连接？（即连接的规则）：在 mapStateToProps中
//如果想对store中的数据做修改
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);