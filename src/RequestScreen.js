import { useContext } from "react";
import { CardContext } from "./CardContext";
import { ScreenContext } from "./ScreenContext";
import { CARD_SCREEN, DEPOSIT_SCREEN, WITHDRAW_SCREEN } from "./Statuses";

export default function RequestScreen() {
  const { cardData } = useContext(CardContext);
  const { setPageHandler } = useContext(ScreenContext);
  const currCard = cardData.activeCard;
  return (
    <div>
      <button onClick={(_) => setPageHandler(CARD_SCREEN)}>Log Out</button>
      <h1>Current Balance: {cardData[currCard].balance}</h1>
      <div>
      <button onClick={(_) => setPageHandler(WITHDRAW_SCREEN)} >
        Withdraw Cash
      </button>
      </div>
      <button onClick={(_) => setPageHandler(DEPOSIT_SCREEN)}>
        Deposit Cash
      </button>
    
    </div>
  );
}
