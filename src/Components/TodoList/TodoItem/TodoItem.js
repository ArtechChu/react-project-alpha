import React, { Component, Fragment } from 'react';
class TodoItem extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={() => this.props.deleteItemHandler(index)}></li>
                        )
                    })
                }
            </Fragment>
        );
    }

}

export default TodoItem;