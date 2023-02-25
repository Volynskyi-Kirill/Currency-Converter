








































function CurrencyForm({
    label,
    options,
    onChangeAmount,
    onChangeCurrency,
    amount,
    currency,
}) {
    return (
        <div>
            <h2>{label}</h2>
            <div>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => onChangeAmount(e.target.value)}
                />
                <select
                    value={currency}
                    onChange={(e) => onChangeCurrency(e.target.value)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export { CurrencyForm };
