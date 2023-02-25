import { createSlice } from '@reduxjs/toolkit';
import { CURRENCIES } from '../const/const';

const initialState = {
    firstSelect: CURRENCIES.USD,
    secondSelect: CURRENCIES.UAN,
};

const currenciesSelected = createSlice({
    name: 'currenciesSelected',
    initialState,
    reducers: {
        changeFirstInput: (state, action) => {
            state.firstSelect = action.payload;
        },
        changeSecondInput: (state, action) => {
            state.secondSelect = action.payload;
        },
    },
});

const { actions, reducer } = currenciesSelected;
const { changeFirstInput, changeSecondInput } = actions;
const currenciesSelect = reducer;

export { currenciesSelect, changeFirstInput, changeSecondInput };
