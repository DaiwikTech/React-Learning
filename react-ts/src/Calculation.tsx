import { useEffect, useState } from "react";

function Child() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Child mounted");

    return () => {
      console.log("Child unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count Changed");
  }, [count]);

  return (
    <>
      <h2>I am the Child component</h2>
      <h3> Here is my value : {count} </h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        Decrease{" "}
      </button>
    </>
  );
}

export default Child;
