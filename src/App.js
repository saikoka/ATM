import "./styles.css";
import CardScreen from "./CardScreen.js";
import { useEffect, useState } from "react";
import mockData from "./mockData.json";
import { CardContext } from "./CardContext.js";
import {
  CARD_SCREEN,
  WITHDRAW_SCREEN,
  DEPOSIT_SCREEN,
  REQUEST_SCREEN,
} from "./Statuses.js";
import { ScreenContext } from "./ScreenContext.js";
import WithdrawScreen from "./WithdrawScreen.js";
import RequestScreen from "./RequestScreen.js";
import DepositScreen from "./DepositScreen.js";
export default function App() {
  const [cardData, setCardData] = useState(mockData);
  const [page, setPage] = useState(CARD_SCREEN);
  const setPageHandler = (page) =>{
    setPage(page);
  }
  const screenRender = () => {
    switch (page) {
      case CARD_SCREEN:
        return <CardScreen />;
      case WITHDRAW_SCREEN:
        return <WithdrawScreen />;
      case REQUEST_SCREEN:
        return <RequestScreen />;
      case DEPOSIT_SCREEN:
        return <DepositScreen />;
    }
  };
  const updateBalance = (cardNumber, balance) => {
    // if (!(cardNumber in cardData)) {
    //   return "";
    // }
    setCardData(balance);
  };
  return (
    <CardContext.Provider value={{ cardData, updateBalance }}>
      <ScreenContext.Provider value={{ page, setPageHandler }}>
        <div className="App">{screenRender()}</div>
      </ScreenContext.Provider>
    </CardContext.Provider>
  );
}
