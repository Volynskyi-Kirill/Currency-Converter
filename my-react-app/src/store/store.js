import { configureStore } from '@reduxjs/toolkit';
import { courseData } from './slice/course_reducer';

const store = configureStore({
    reducer: {
        dataCourse: courseData,
    },
});

export { store };
