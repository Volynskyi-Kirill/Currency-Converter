import { createSlice } from '@reduxjs/toolkit';
import { TEST_RESPONCE } from '../const/const';

const initialState = {
    dataCourse: TEST_RESPONCE,
};

const dataCourse = createSlice({
    name: 'dataCourse',
    initialState,
    reducers: {
        changeDataCource: (state, action) => {
            state.dataCourse = action.payload;
        },
    },
});

const { actions, reducer } = dataCourse;
const { changeDataCource } = actions;
const courseData = reducer;

export { courseData, changeDataCource };
