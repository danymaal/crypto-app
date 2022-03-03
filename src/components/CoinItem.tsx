import React, { FC } from 'react';

interface ICoinItem {
  id?: string;
  symbol: string;
  name: string;
  ath: number;
  atl: number;
  current_price: number;
  image: any;
}

interface ICoinList {
  coin: ICoinItem;
}

const CoinItem: FC<ICoinList> = ({ coin }) => {
  return (
    <div>
      <img src={coin.image}></img>
      <h1>{coin.symbol}</h1>
      <h1>{coin.name}</h1>
      <h1>{coin.ath}</h1>
      <h1>{coin.atl}</h1>
      <h1>{coin.current_price}</h1>
    </div>
  );
};

export default CoinItem;
