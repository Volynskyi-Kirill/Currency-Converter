import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './header/header';
import { getData } from './get_course/get_corse';
import { API, TEST_RESPONCE } from './const/const';
import { changeDataCource } from './store/slice/course_reducer';
import { CurrencyConverter } from './currency_converter/currency_converter';
import { Normalize } from 'styled-normalize';
import './App.css';

function App() {
    const dispatch = useDispatch();
    // const store = useSelector((store) => store);

    useEffect(() => {
        // async function fetchData() {
        //     const course = await getData(API.CURRENCY_RATES);
        //     console.log('course: ', course);
        // }
        // fetchData();
    }, []);

    return (
        <>
            <Normalize />
            <Header />
            <CurrencyConverter />
        </>
    );
}

export default App;
