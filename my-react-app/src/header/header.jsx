import { useSelector } from 'react-redux';
import './header.css';

function Header() {
    const dataCourse = useSelector((store) => store.dataCourse.dataCourse);
    const [EUR, USD] = dataCourse;

    return (
        <header>
            <div className="rate-buy">
                <div className="text-buy">Покупка</div>
                <div className="exchange-rates">
                    <span id="usd-rate">{`USD: ${Number(USD.buy).toFixed(
                        2
                    )}`}</span>
                    <span id="eur-rate">{`EUR: ${Number(EUR.buy).toFixed(
                        2
                    )}`}</span>
                </div>
            </div>
            <div className="rate-sale">
                <div className="text-sale">Продажа</div>
                <div className="exchange-rates">
                    <span id="usd-rate">{`USD: ${Number(USD.sale).toFixed(
                        2
                    )}`}</span>
                    <span id="eur-rate">{`EUR: ${Number(EUR.sale).toFixed(
                        2
                    )}`}</span>
                </div>
            </div>
        </header>
    );
}

export { Header };
