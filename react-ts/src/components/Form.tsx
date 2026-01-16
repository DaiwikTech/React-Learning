import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [fruit, setFruit] = useState<string>("");
  const [gender, setGender] = useState<boolean>();
  const [hobbies, setHobbies] = useState<string[]>();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (/^[A-Za-z]*$/.test(value) && value.length <= 20) {
      setName(value);
    }
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (/^\d*$/.test(value) && value.length <= 11) {
      setNumber(value);
    }
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const handleChangeGenderMale = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value == "on") {
      setGender(true);
    }
  };

  const handleChangeGenderFemale = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value == "on") {
      setGender(false);
    }
  };

  const handleFruitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFruit(e.currentTarget.value);
  };

  const handleHobbiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.currentTarget;

    if (checked) {
      setHobbies((old = []) => [...old, value]);
    } else {
      setHobbies((old = []) => old.filter((hobby) => hobby !== value));
    }
  };
  return (
    <>
      <h1> Enter Your details for submission </h1>

      <form>
        Enter Your Name:
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          id="name"
          placeholder="Enter Your Name"
        ></input>
        <br></br>
        <br></br>
        Enter Your Phone number:
        <input
          type="text"
          id="number"
          value={number}
          placeholder="Enter Your Phone number"
          onChange={handleChangeNumber}
        ></input>
        <br></br>
        <br></br>
        Enter Your B-date:
        <input type="date" id="age" onChange={handleChangeDate}></input>
        <br></br>
        <br></br>
        Enter Your Gender:
        <input
          type="radio"
          name="age"
          onChange={handleChangeGenderMale}
        ></input>
        Male
        <input
          type="radio"
          name="age"
          onChange={handleChangeGenderFemale}
        ></input>
        Female
        <br></br>
        <br></br>
        Choose A favorite Fruit:
        <label htmlFor="fruits">Choose a fruit:</label>
        <select
          id="fruits"
          name="fruits"
          value={fruit}
          onChange={handleFruitChange}
        >
          <option value="">-- Select --</option>
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Orange">Orange</option>
        </select>
        <br></br>
        <br></br>
        Your Hobbies:
        <input
          type="checkbox"
          value="sports"
          onChange={handleHobbiesChange}
        ></input>{" "}
        Sports
        <input
          type="checkbox"
          value="codding"
          onChange={handleHobbiesChange}
        ></input>{" "}
        Codding
        <input
          type="checkbox"
          value="Cards"
          onChange={handleHobbiesChange}
        ></input>{" "}
        Cards
        <br></br>
        <br></br>
        <button onClick={() => {}}> Calculate Age </button>
        {name && <p>Your Name: {name}</p>}
        {number && <p>Your Number: {number}</p>}
        {date && <p>Your B-date: {date}</p>}
        {gender !== undefined && (
          <p>Your Gender: {gender ? "Male" : "Female"}</p>
        )}
        {fruit && <p>Your favorite FRaruit: {fruit}</p>}
        {hobbies && hobbies.length > 0 && (
          <p>Your Hobbies: {hobbies.join(", ")}</p>
        )}
      </form>
    </>
  );
}

export default App;
