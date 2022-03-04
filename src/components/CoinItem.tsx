import React, { FC } from 'react';
import '../scss/CoinItem.scss';
import ICoinItem from '../types';



interface ICoinList {
  coin: ICoinItem;
}

const CoinItem: FC<ICoinList> = ({ coin }) => {
  return (
    <div>
      <div className='coin-container'>
        <div className='coin-conitainer__row'>
          <div className='coin'>
            <img src={coin.image} alt='coin image' />
            <h1>{coin.name}</h1>
            <p className='coin-symbol'>{coin.symbol}</p>
          </div>
          <div className='coin-data'>
            <p className='coin-price'>${coin.current_price}</p>
            <p className='coin-marketcap'>Cap: {coin.market_cap}</p>
            {coin.market_cap_change_percentage_24h < 0 ? (
              <p className='coin-percent red'>
                {coin.market_cap_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className='coin-percent green'>
                {coin.market_cap_change_percentage_24h.toFixed(2)}%
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinItem;
