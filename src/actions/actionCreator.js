import {ADD_TASK, COMPLETE_TASK, REMOVE_TASK, FILTRATION_TASKS} from '../constants';

export const  addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted,
});

export const completeTask = id => ({
    type: COMPLETE_TASK,
    id,
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    id,
});

export const filtrationTask = activeFilter => ({
    type: FILTRATION_TASKS,
    activeFilter,
});