import { useContext, useEffect, useState, useRef } from "react";
import { CardContext } from "./CardContext";
import ErrorModal from "./ErrorModal";

export default function CardScreen(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState();
  const { cardData, setCardData } = useContext(CardContext);
  const [error, setError] = useState("");
  const modal = useRef(null);

  const clearError = () => {
    setError("");
  };
  const checkCard = (e) => {
    e.preventDefault();
    console.log(cardData);
    if (!(cardNumber in cardData)) {
      setError("Invalid Card Number");
      if (modal.current) {
        modal.current.showModal();
      }
    } else if (cardData[cardNumber].pin !== pin) {
      if (modal.current) {
        modal.current.showModal();
      }
    }
  };

  useEffect(() => {
    console.log(modal.current);
  }, modal.current);
  // useEffect(() => {
  //   console.log(cardNumber);
  // }, [cardNumber]);

  return (
    <>
      <div id="card-screen">
        <h1 className="bottom-spacing">Welcome</h1>
        <h3>Please enter card number and pin to begin</h3>
        {/* <dialog ref ={modal}>HELLO</dialog> */}
        <ErrorModal errorMessage={error} clearError={clearError} ref={modal} />
        <form onSubmit={(e) => checkCard(e)}>
          <input
            type="number"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="form-sizing"
          ></input>

          <input
            type="number"
            placeholder="PIN"
            className="form-sizing"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          ></input>
          <button type="submit" id="" className="form-sizing">
            Next
          </button>
        </form>
      </div>
    </>
  );
}
