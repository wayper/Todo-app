import { combineReducers } from 'redux';
import tasks from './tasks';
import filters from './filters';

const rootReduser = combineReducers({ tasks, filters });

export default rootReduser;