import { combineReducers } from 'redux';
import { courseData } from './course_reducer';

const currencyRates = combineReducers({
    courseData,
});

export { currencyRates };
