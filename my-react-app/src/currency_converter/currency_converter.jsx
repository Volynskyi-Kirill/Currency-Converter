import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CURRENCIES } from '../const/const';
import './currency_converter.css';

function CurrencyConverter() {
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const [firstCurrencySelect, setFirstCurrencySelect] = useState(
        CURRENCIES.USD
    );
    const [secondCurrencySelect, setSecondCurrencySelect] = useState(
        CURRENCIES.UAN
    );

    const currencyOptions = Object.values(CURRENCIES).map((currency) => (
        <option key={currency}>{currency}</option>
    ));
    const dataCource = useSelector((store) => store.dataCourse.dataCourse);
    const [EUR, USD] = dataCource;

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
                                firstCurrencySelect,
                                secondCurrencySelect
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
                                secondCurrencySelect
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
                                firstCurrencySelect
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
                                firstCurrencySelect
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
