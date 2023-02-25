import { NUMBER } from '../const/const';

function convertCurrency(amount, fromCurrency, toCurrency, dataCourse) {
    const [EUR, USD] = dataCourse;
    const exchangeRates = {
        UAN: {
            UAN: NUMBER.ONE,
            USD: NUMBER.ONE / USD.buy,
            EUR: NUMBER.ONE / EUR.buy,
        },
        USD: {
            UAN: USD.buy,
            USD: NUMBER.ONE,
            EUR: USD.buy / EUR.buy,
        },
        EUR: {
            UAN: EUR.buy,
            USD: EUR.buy / USD.buy,
            EUR: NUMBER.ONE,
        },
    };
    const exchangeRate = exchangeRates[fromCurrency][toCurrency];

    return Number((amount * exchangeRate).toFixed(2));
}

export { convertCurrency };
