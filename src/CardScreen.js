import { useState } from "react";

export default function CardScreen(props) {
  const [cardNumber, setCardNumber] = useState();
  const [pin, setPin] = useState();
  // const checkCard = () => {};
  return (
    <>
      <div id="card-screen">
        <h1 className="bottom-spacing">Welcome</h1>
        <h3>Please enter card number and pin to begin</h3>
        <form>
          <input
            type="number"
            minLength={16}
            maxLength={16}
            placeholder="Card Number"
            className="form-sizing"
          ></input>

          <input
            type="number"
            max={9999}
            placeholder="PIN"
            className="form-sizing"
          ></input>
          <button type="submit" id="" className="form-sizing">
            Next
          </button>
        </form>
      </div>
    </>
  );
}
