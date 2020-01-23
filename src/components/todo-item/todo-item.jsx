 
import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ id, text, isCompleted, completeTask, removeTask }) => (
    <li className="todo-item">
        <i className={isCompleted ? 'far fa-check-square' : 'far fa-square'}
            onClick={() => completeTask(id)}></i>
        <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
        <i className="far fa-times-circle remove-task" onClick={() => removeTask(id)}></i>
    </li>
);

ToDoItem.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
}

ToDoItem.defaultProps = {
    id: 0,
    text: '',
    isCompleted: false,
    removeTask: () => {},
}

export default ToDoItem;