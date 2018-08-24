import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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
                        // dangerouslySetInnerHTML={{ __html: item }}
                        onClick={this.deleteItem}>
                        {this.props.test} - {item}
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

TodoItem.propTypes = {
    item:PropTypes.string.isRequired,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps = {
    test:"here is a default Value"
}

export default TodoItem;