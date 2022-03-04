export default interface ICoinItem {
  id?: string;
  symbol: string;
  name: string;
  ath: number;
  atl: number;
  current_price: number;
  image: any;
  market_cap: number;
  market_cap_change_percentage_24h: number;
}
