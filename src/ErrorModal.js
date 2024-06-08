import { forwardRef } from "react";

export default forwardRef(function ErrorModal(props, ref) {
  return (
    <dialog ref={ref}>
      <p className="error">Error: {props.errorMessage}</p>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  );
});
