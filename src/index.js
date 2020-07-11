import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import CoinPage from "./components/coinpage";
import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useLocalStorage("coindata", []);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => {
        console.log(res.data);
        setCoinData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
      <CoinPage coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
