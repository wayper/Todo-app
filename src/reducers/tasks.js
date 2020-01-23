import {ADD_TASK, COMPLETE_TASK, REMOVE_TASK} from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: [],
    }
}

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
    switch (type) {
        case ADD_TASK :
            return [
                ...state, {
                    id,
                    text,
                    isCompleted,
                }
            ];
        case COMPLETE_TASK :
            return [...state].map(task => {
                if(task.id === id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        case REMOVE_TASK :
            return [...state].filter(task => task.id !== id);            
        default :
            return state;
    }
}

export default tasks;