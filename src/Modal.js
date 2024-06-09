import { forwardRef } from "react";

export default forwardRef(function Modal(props, ref) {
  return (
    <dialog ref={ref}>
      <p className={props.success ? "success" : "error"}>{props.message}</p>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  );
});
