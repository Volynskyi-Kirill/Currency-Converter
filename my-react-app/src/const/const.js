const API = {
    CURRENCY_RATES:
        'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
};

const CURRENCIES = {
    USD: 'USD',
    EUR: 'EUR',
    UAN: 'UAN',
};

const TEST_RESPONCE = [
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

export { API, TEST_RESPONCE, CURRENCIES };
