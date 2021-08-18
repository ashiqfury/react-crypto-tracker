import React from 'react';

function Coin({ name, image, symbol, price, volume, priceChange, market_cap }) {
	return (
		<div className="coin-container">
			<div className="coin-row">
				<div className="coin">
					<img src={image} alt="Crypto" />
					<h1>{name}</h1>
					<p className="coin-symbol">{symbol}</p>
				</div>
				<div className="coin-data">
					<p className="coin-price">Rs.{price}</p>
					<p className="coin-volume">Rs.{volume.toLocaleString()}</p>
					{priceChange < 0 ? (
						<p className="coin-percent red">{priceChange.toFixed(2)}%</p>
					) : (
						<p className="coin-percent green">{priceChange.toFixed(2)}%</p>
					)}
					<p className="coin-marketcap">
						Mkt Cap: Rs.{market_cap.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Coin;
