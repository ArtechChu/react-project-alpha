import React, { Component, Fragment } from 'react';
class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item, index } = this.props;
        return (
            <Fragment>
                {
                    <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                        onClick={this.deleteItem}>
                    </li>
                }
            </Fragment>
        );
    }

    deleteItem = () => {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

}

export default TodoItem;