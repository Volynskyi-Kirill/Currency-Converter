import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CURRENCIES, DEFAULT } from '../const/const';
import { convertCurrency } from '../helper/convert_currency';
import './currency_converter.css';

function CurrencyConverter() {
    const [firstNumber, setFirstNumber] = useState(DEFAULT.VALUE);
    const [secondNumber, setSecondNumber] = useState(DEFAULT.VALUE);
    const [firstCurrencySelect, setFirstCurrencySelect] = useState(
        CURRENCIES.USD
    );
    const [secondCurrencySelect, setSecondCurrencySelect] = useState(
        CURRENCIES.UAN
    );

    const currencyOptions = Object.values(CURRENCIES).map((currency) => (
        <option key={currency}>{currency}</option>
    ));
    const dataCourse = useSelector((store) => store.dataCourse.dataCourse);

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
                                firstCurrencySelect,
                                secondCurrencySelect,
                                dataCourse
                            )
                        );
                    }}
                />
                <select
                    className="select-currency"
                    onChange={(event) => {
                        setFirstCurrencySelect(event.target.value);
                        setSecondNumber(
                            convertCurrency(
                                firstNumber,
                                event.target.value,
                                secondCurrencySelect,
                                dataCourse
                            )
                        );
                    }}
                    value={firstCurrencySelect}
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
                                secondCurrencySelect,
                                firstCurrencySelect,
                                dataCourse
                            )
                        );
                    }}
                />
                <select
                    className="select-currency"
                    onChange={(event) => {
                        setSecondCurrencySelect(event.target.value);
                        setFirstNumber(
                            convertCurrency(
                                secondNumber,
                                event.target.value,
                                firstCurrencySelect,
                                dataCourse
                            )
                        );
                    }}
                    value={secondCurrencySelect}
                >
                    {currencyOptions}
                </select>
            </div>
        </div>
    );
}

export { CurrencyConverter };
