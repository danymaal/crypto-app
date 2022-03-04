import React, { FC, useState } from 'react';
import CoinItem from './CoinItem';
import ICoinItem from '../types'



interface ICoinList {
  coins: ICoinItem[];
  childer?: any;
}

const CoinList: FC<ICoinList> = ({ coins, children }) => {
  const [search, setSearch] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <form className='form'>
        <input type='text' placeholder='Serch coin' className='input' onChange={changeHandler} />
      </form>
      {filteredCoins.map(coin => (
        <CoinItem coin={coin} key={coin.id} />
      ))}
    </div>
  );
};

export default CoinList;