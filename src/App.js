import "./styles.css";
import CardScreen from "./CardScreen.js";
import { useEffect, useState } from "react";
import mockData from "./mockData.json";
import { CardContext } from "./CardContext.js";

export default function App() {
  const [cardData, setCardData] = useState(mockData);
  const updateBalance = (cardNumber, balance) => {
    // if (!(cardNumber in cardData)) {
    //   return "";
    // }
    setCardData(balance);
  };
  return (
    <CardContext.Provider value={{ cardData, updateBalance }}>
      <div className="App">
        <CardScreen/>
      </div>
    </CardContext.Provider>
  );
}
