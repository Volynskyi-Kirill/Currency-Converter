import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from './header/header';
import { getData } from './get_course/get_corse';
import { API } from './const/const';
import { changeDataCourse } from './store/slice/course_reducer';
import { CurrencyConverter } from './currency_converter/currency_converter';
import { Normalize } from 'styled-normalize';
import './App.css';

function App() {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     async function fetchData() {
    //         const course = await getData(API.CURRENCY_RATES);
    //         console.log('course: ', course);
    //         // dispatch(changeDataCourse(course))
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
            <Normalize />
            <Header />
            <CurrencyConverter />
        </>
    );
}

export default App;
