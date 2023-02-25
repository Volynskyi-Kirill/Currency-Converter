import { useState } from 'react';
import { CURRENCIES } from '../const/const';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeFirstInput,
    changeSecondInput,
} from '../store/currencies_selected';
import './currency_converter.css';

function CurrencyConverter() {
    const dispatch = useDispatch();

    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();

    const currencyOptions = Object.values(CURRENCIES).map((currency) => (
        <option key={currency}>{currency}</option>
    ));
    const dataCource = useSelector((store) => store.course.dataCourse);
    const [EUR, USD] = dataCource;

    const firstSelect = useSelector(
        (store) => store.currenciesSelect.firstSelect
    );
    const secondSelect = useSelector(
        (store) => store.currenciesSelect.secondSelect
    );

    function convertCurrency(amount, fromCurrency, toCurrency) {
        const exchangeRates = {
            UAN: { UAN: 1, USD: 1 / USD.buy, EUR: 1 / EUR.buy },
            USD: { UAN: USD.buy, USD: 1, EUR: USD.buy / EUR.buy },
            EUR: { UAN: EUR.buy, USD: EUR.buy / USD.buy, EUR: 1 },
        };
        const exchangeRate = exchangeRates[fromCurrency][toCurrency];

        return Number((amount * exchangeRate).toFixed(2));
    }

    return (
        <div className="container">
            <h1>Конвертер валют</h1>
            <div className="from-currency">
                <input
                    type="number"
                    value={firstNumber}
                    placeholder="Введите число"
                    onChange={(event) => {
                        setFirstNumber(event.target.value);
                        setSecondNumber(
                            convertCurrency(
                                event.target.value,
                                firstSelect,
                                secondSelect
                            )
                        );
                    }}
                />
                <select
                    className="select-currency"
                    onChange={(event) => {
                        dispatch(changeFirstInput(event.target.value));
                        setSecondNumber(
                            convertCurrency(
                                firstNumber,
                                event.target.value,
                                secondSelect
                            )
                        );
                    }}
                    value={firstSelect}
                >
                    {currencyOptions}
                </select>
            </div>
            <div className="to-currency">
                <input
                    type="number"
                    value={secondNumber}
                    placeholder="Введите число"
                    onChange={(event) => {
                        setSecondNumber(event.target.value);
                        setFirstNumber(
                            convertCurrency(
                                event.target.value,
                                secondSelect,
                                firstSelect
                            )
                        );
                    }}
                />
                <select
                    className="select-currency"
                    onChange={(event) => {
                        dispatch(changeSecondInput(event.target.value));
                        setFirstNumber(
                            convertCurrency(
                                secondNumber,
                                event.target.value,
                                firstSelect
                            )
                        );
                    }}
                    value={secondSelect}
                >
                    {currencyOptions}
                </select>
            </div>
        </div>
    );
}

export { CurrencyConverter };
