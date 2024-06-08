import "./styles.css";
import CardScreen from "./CardScreen.js";
import { useEffect, useState } from "react";
import mockData from "./mockData.json";
export default function App() {
  const [cardData, setCardData] = useState(mockData);
  const updateBalance = (cardNumber, balance) => {
    // if (!(cardNumber in cardData)) {
    //   return "";
    // }
    setCardData(balance);
  };
  return (
    <div className="App">
      <CardScreen cardData = {cardData}/>
    </div>
  );
}
