import { useContext, useState, useRef } from "react";
import { CardContext } from "./CardContext";
import Modal from "./Modal";
import { ScreenContext } from "./ScreenContext";
import { REQUEST_SCREEN } from "./Statuses";

export default function CardScreen(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  const { cardData, updateCardData } = useContext(CardContext);
  const { setPageHandler } = useContext(ScreenContext);
  const [modalMessage, setModalMessage] = useState("");
  const modal = useRef(null);

  const handleCardNumber = (e) => {
    if (e.target.value.length <= 16) {
      setCardNumber(e.target.value);
    }
  };
  const handleSetPin = (e) => {
    if (e.target.value.length <= 4) {
      setPin(e.target.value);
    }
  };

  const checkCard = (e) => {
    e.preventDefault();
    if (!(cardNumber in cardData)) {
      setModalMessage("Error: Invalid Card Number");
      if (modal.current) {
        modal.current.showModal();
      }
    } else if (cardData[cardNumber].pin !== Number(pin)) {
      setModalMessage("Error: Invalid Pin");
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
        <Modal message={modalMessage} ref={modal} />
        <form onSubmit={(e) => checkCard(e)}>
          <input
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumber}
          ></input>

          <input placeholder="PIN" value={pin} onChange={handleSetPin}></input>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}
