import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import CoinList from './components/CoinList';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      )
      .then(response => {
        console.log(response.data);

        setCoins(response.data);
      });
  }, []);

  return (
    <div className = 'wrapper'>

    <div></div>

      <CoinList coins={coins} />
    </div>
  );
}

export default App;
