import { useState } from "react";
import Calculation from "./Calculation";

function App() {
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {show && (
        <>
          <h1>Hello World {count}</h1>

          <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
      )}

      <Calculation value={show} toggleShow={toggleShow} />
    </>
  );
}

export default App;
