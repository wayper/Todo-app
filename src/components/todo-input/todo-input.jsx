import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
    <div className="todo-input-wrapper">
        <input 
            className="todo-input"
            placeholder="... add task"
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
        />
                <i className="fas fa-feather-alt"></i>

    </div>
);

ToDoInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
}

ToDoInput.defaultProps = {

    value: '',
    onChange: () => {},
    onKeyPress: () => {},
}

export default ToDoInput;