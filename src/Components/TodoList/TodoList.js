import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
    render() {
        return (
            <div>
                <Input placeholder="请输入item" style={{ width: "400px" }} />
                <Button type="primary">确定</Button>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                    style={{marginTop:"10px", width:"400px"}}
                />
            </div>
        );
    }
}

export default TodoList;