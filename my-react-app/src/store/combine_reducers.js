import { combineReducers } from 'redux';
import { course } from './course_reducer';
import { currenciesSelect } from './currencies_selected';

const currencyRates = combineReducers({
    course,
    currenciesSelect,
});

export { currencyRates };
