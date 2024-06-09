import { useContext, useRef, useState } from "react";
import { ScreenContext } from "./ScreenContext";
import { REQUEST_SCREEN } from "./Statuses";
import { CardContext } from "./CardContext";
import Modal from "./Modal";

export default function WithdrawScreen(props) {
  const { setPageHandler } = useContext(ScreenContext);
  const { cardData, updateCardData } = useContext(CardContext);
  const [amount, setAmount] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(true);
  const modal = useRef(null);

  const handleWithdraw = (e) => {
    e.preventDefault();
    const currCard = cardData.activeCard;
    const currCardData = cardData[currCard];
    let balance = currCardData.balance;
    let withdrawLimit = currCardData.limit;
    let withdrawAmount = currCardData.withdrawAmount;
    balance -= Number(amount);
    withdrawAmount += Number(amount);
    if (balance < 0 || withdrawAmount > withdrawLimit) {
      setModalSuccess(false);
      if (balance < 0) {
        setModalMessage("Error: Insufficient Funds");
      } else {
        setModalMessage("Error: You've reached your withdraw limit.");
      }
    } else {
      updateCardData(cardData.activeCard, balance, withdrawAmount);
      setModalSuccess(true);
      setModalMessage("Withdraw successful");
    }
    if (modal.current) {
      modal.current.showModal();
    }
    setAmount("");
  };
  return (
    <div>
      <button onClick={(_) => setPageHandler(REQUEST_SCREEN)}>Back</button>
      <Modal message={modalMessage} ref={modal} success={modalSuccess}/>
      <form onSubmit={(e) => handleWithdraw(e)}>
        <input
          placeholder="Withdraw Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}
