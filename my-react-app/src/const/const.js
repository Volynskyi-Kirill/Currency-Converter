const API = {
    CURRENCY_RATES:
        'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    // "https://api.minfin.com.ua/mb/246b0414ae147b06a900152882fef622c5aee6a0/"
    // 'https://api.monobank.ua/bank/currency',
};

const CURRENCIES = {
    USD: 'USD',
    EUR: 'EUR',
    UAN: 'UAN',
};

const DEFAULT = {
    VALUE: '',
};

const NUMBER = {
    ONE: 1,
};

const TEST_RESPONSE = [
    {
        ccy: 'EUR',
        base_ccy: 'UAH',
        buy: '19.20000',
        sale: '20.00000',
    },
    {
        ccy: 'USD',
        base_ccy: 'UAH',
        buy: '15.50000',
        sale: '15.85000',
    },
];

export { API, TEST_RESPONSE, CURRENCIES, DEFAULT, NUMBER };
