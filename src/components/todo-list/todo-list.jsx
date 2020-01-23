import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, completeTask, removeTask }) => (
    <ul className="todo-list">
        {tasksList.map(({ id, text, isCompleted }) =>
            <ToDoItem
                key={id}
                id={id}
                text={text}
                isCompleted={isCompleted}
                completeTask={completeTask}
                removeTask={removeTask}
            />
        )}
    </ul>
);

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    completeTask: PropTypes.func,
    removeTask: PropTypes.func,
  }
  
  ToDoList.defaultProps = {
    tasksList: [],
    completeTask: () => {},
    removeTask: () => {},
  }
  
  export default ToDoList;