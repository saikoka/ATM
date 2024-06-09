import { useContext } from "react";
import { ScreenContext } from "./ScreenContext";
import { REQUEST_SCREEN } from "./Statuses";

export default function WithdrawScreen(props) {
  const { setPageHandler } = useContext(ScreenContext);
  return <button onClick={(_) => setPageHandler(REQUEST_SCREEN)}>Back</button>;
}
