export default function CardScreen(props) {
  const checkCard = () => {};
  return (
    <>
      <div id="card-screen">
        <h1 className="bottom-spacing">Welcome</h1>
        <h3>Please enter card number and pin to begin</h3>
        <form onSubmit={checkCard}>
          <input
            type="number"
            minlength={16}
            maxlength={16}
            placeholder="Card Number"
            className="form-sizing"
          ></input>

          <input
            type="number"
            minLength={4}
            maxlength={4}
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
