import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI =(props)=> {
    return (
        <div>
        <Input
            placeholder="请输入item"
            style={{ width: "400px" }}
            value={props.inputValue}
            onChange={(e) => props.onInputChanging(e)}
        />
        <Button type="primary" onClick={() => props.onAddButtonClicked()}>确定</Button>
        <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (<List.Item onClick={() => props.onDeleteItem(index)}>{item}</List.Item>)}
            style={{ marginTop: "10px", width: "400px" }}
        />
    </div>
    );
}



// class TodoListUI extends Component {
//     render() {
//         return (
//             <div>
//                 <Input
//                     placeholder="请输入item"
//                     style={{ width: "400px" }}
//                     value={this.props.inputValue}
//                     onChange={(e) => this.props.onInputChanging(e)}
//                 />
//                 <Button type="primary" onClick={() => this.props.onAddButtonClicked()}>确定</Button>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={() => this.props.onDeleteItem(index)}>{item}</List.Item>)}
//                     style={{ marginTop: "10px", width: "400px" }}
//                 />
//             </div>
//         )
//     }
// }
export default TodoListUI;