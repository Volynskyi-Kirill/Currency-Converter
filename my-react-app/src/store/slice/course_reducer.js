import { createSlice } from '@reduxjs/toolkit';
import { TEST_RESPONSE } from '../../const/const';

const initialState = {
    dataCourse: TEST_RESPONSE,
};

const dataCourse = createSlice({
    name: 'dataCourse',
    initialState,
    reducers: {
        changeDataCourse: (state, action) => {
            state.dataCourse = action.payload;
        },
    },
});

const { actions, reducer } = dataCourse;
const { changeDataCourse } = actions;
const courseData = reducer;

export { courseData, changeDataCourse };
