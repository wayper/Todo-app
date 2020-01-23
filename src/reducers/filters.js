import { FILTRATION_TASKS } from '../constants';

const BASE_FILTER = 'all';

const filters = (state = BASE_FILTER, { type, activeFilter }) => {
    switch (type) {
        case FILTRATION_TASKS: 
            return activeFilter;
        default:
            return state;
    }
}

export default filters;