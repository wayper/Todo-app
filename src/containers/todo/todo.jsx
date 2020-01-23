import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, completeTask, removeTask, filtrationTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

    state = {
        taskText: '',
    }

    handleInputChange = ({ target: {value} }) => {
        this.setState({
            taskText: value,
        })
    }

    handleAddTask = ({ key }) => {
        const { taskText } = this.state;

        if (taskText.length > 2 && key === 'Enter') {
            const { addTask } = this.props;

            addTask((new Date()).getTime(), taskText, false);

            this.setState({
                taskText: '',
            })
        }
    }

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            default :
                return tasks;
        }
    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

    render() {
        const { taskText } = this.state;
        const { tasks, completeTask, removeTask, filters, filtrationTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters);
        const amountCompleted = this.getActiveTasksCounter(tasks);
        return (
            <div className="todo-wrapper">
                <ToDoInput onChange={this.handleInputChange} onKeyPress={this.handleAddTask} value={taskText}/>
                {isTasksExist && <ToDoList tasksList={filteredTasks} completeTask={completeTask} removeTask={removeTask}/>}
                <Footer filtrationTask={filtrationTask} amount={tasks.length} amountCompleted={amountCompleted} activeFilter={filters} />
            </div>

        );
    }
}

export default connect(({ tasks, filters }) => ({
    tasks,
    filters,
}), {addTask, completeTask, removeTask, filtrationTask})(ToDo);