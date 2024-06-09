import { useContext, useState, useRef } from "react";
import { CardContext } from "./CardContext";
import ErrorModal from "./ErrorModal";
import { ScreenContext } from "./ScreenContext";
import { REQUEST_SCREEN } from "./Statuses";

export default function CardScreen(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  const { cardData, updateCardData } = useContext(CardContext);
  const { setPageHandler } = useContext(ScreenContext);
  const [error, setError] = useState("");
  const modal = useRef(null);

  const clearError = () => {
    setError("");
  };

  const checkCard = (e) => {
    e.preventDefault();
    if (!(cardNumber in cardData)) {
      setError("Invalid Card Number");
      if (modal.current) {
        modal.current.showModal();
      }
    } else if (cardData[cardNumber].pin !== Number(pin)) {
      setError("Invalid Pin");
      if (modal.current) {
        modal.current.showModal();
      }
    } else {
      setPageHandler(REQUEST_SCREEN);
      updateCardData(cardNumber);
    }
  };

  return (
    <>
      <div id="card-screen">
        <h1 className="bottom-spacing">Welcome</h1>
        <h3>Please enter card number and pin to begin</h3>
        <ErrorModal errorMessage={error} clearError={clearError} ref={modal} />
        <form onSubmit={(e) => checkCard(e)}>
          <input
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          ></input>

          <input
            placeholder="PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          ></input>
          <button type="submit">
            Next
          </button>
        </form>
      </div>
    </>
  );
}
