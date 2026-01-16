import { useState } from "react";
import Child from "./Calculation";

function App() {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </button>

      <h1> I am Parent Component </h1>

      {show && <Child />}
    </>
  );
}

export default App;
