import { useContext, useRef, useState } from "react";
import { ScreenContext } from "./ScreenContext";
import { REQUEST_SCREEN } from "./Statuses";
import { CardContext } from "./CardContext";
import Modal from "./Modal";

export default function DepositScreen(props) {
  const { setPageHandler } = useContext(ScreenContext);
  const { cardData, updateCardData } = useContext(CardContext);
  const [amount, setAmount] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const modal = useRef(null);

  const depositAmount = (e) => {
    e.preventDefault();
    let balance = cardData[cardData.activeCard].balance;
    balance += Number(amount);
    updateCardData(cardData.activeCard, balance);
    setModalMessage("Deposit successful");
    setAmount("");
    if (modal.current) {
      modal.current.showModal();
    }
  };
  return (
    <div>
      <button onClick={(_) => setPageHandler(REQUEST_SCREEN)}>Back</button>
      <Modal message={modalMessage} ref={modal} success={true} />
      <form onSubmit={(e) => depositAmount(e)}>
        <input
          placeholder="Deposit Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}
