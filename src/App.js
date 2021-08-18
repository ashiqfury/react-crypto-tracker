import { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './coin.css';
import './App.css';

function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.then((res) => setCoins(res.data))
			.catch((err) => console.log(err));
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="coin-app">
			<div className="coin__search">
				<h1 className="coin--text">Search a currency</h1>
				<form>
					<input
						type="text"
						placeholder="Search"
						className="coin__search--input"
						value={search}
						onChange={handleChange}
					/>
				</form>
			</div>

			{filteredCoins.map((coin) => {
				return (
					<Coin
						key={coin.key}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						market_cap={coin.market_cap}
						price={coin.current_price}
						priceChange={coin.price_change_percentage_24h}
						volume={coin.total_volume}
					/>
				);
			})}
		</div>
	);
}

export default App;
