import { useDispatch, useSelector } from 'react-redux';
import './header.css';

function Header() {
    const dataCourse = useSelector((store) => store.dataCourse.dataCourse);
    const [EUR, USD] = dataCourse;

    return (
        <header>
            <div className="rate-buy">
                <div className="text-buy">Покупка</div>
                <div className="exchange-rates">
                    <span id="usd-rate">{`USD: ${USD.buy}`}</span>
                    <span id="eur-rate">{`EUR: ${EUR.buy}`}</span>
                </div>
            </div>
            <div className="rate-sale">
                <div className="text-sale">Продажа</div>
                <div className="exchange-rates">
                    <span id="usd-rate">{`USD: ${USD.sale}`}</span>
                    <span id="eur-rate">{`EUR: ${EUR.sale}`}</span>
                </div>
            </div>
        </header>
    );
}

export { Header };
