export const GetAllTickers = () => {
  return fetch(`http://localhost:8088/tickers`).then((res) => res.json());
};
