type CalProp = {
  value: boolean;
  toggleShow(): void;
};

function Calculation({ value, toggleShow }: CalProp) {
  return (
    <>
      <h1>Toggle Hide & Show</h1>

      <button onClick={toggleShow}>{value ? "Hide" : "Show"}</button>
    </>
  );
}

export default Calculation;
