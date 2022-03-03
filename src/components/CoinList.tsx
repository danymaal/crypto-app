import React, { FC } from 'react'
import CoinItem from './CoinItem'

interface ICoinItem {
    id?: string
    symbol: string
    name: string
    ath: number
    atl: number
    current_price: number
    image: any
}

interface ICoinList {
    coins: ICoinItem[]
    childer?: any
}

const CoinList: FC<ICoinList> = ({coins, children}) => {
  return (
    <div>
        {coins.map((coin) => 
          <CoinItem coin = {coin} key =  {coin.id}  />
        )}
    </div>
  )
}

export default CoinList