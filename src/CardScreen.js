export default function CardScreen(props) {
  return (
    <>
      <h1>Welcome!</h1>
      <h2>Please enter card number to begin</h2>
      <input type="number" minLength={16} maxLength={16}></input>
    </>
  );
}
