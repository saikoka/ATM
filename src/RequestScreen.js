export default function RequestScreen(props) {
  return (
    <div>
      <button>Log Out</button>
      <h1>Current Balance: {props.balance}</h1>
      <button>Withdraw Cash</button>
      <button>Deposit Cash</button>
    </div>
  );
}
