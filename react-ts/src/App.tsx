import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<boolean>();
  const [hobbies, setHobbies] = useState<string[]>();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.currentTarget.value);
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const handleChangeGenderMale = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value == "on") {
      setGender(true);
    } else {
    }
  };

  const handleChangeGenderFemale = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value == "on") {
      setGender(false);
    } else {
    }
  };

  return (
    <>
      <h1> Enter Your details for submission </h1>

      <form>
        Enter Your Name:
        <input
          type="text"
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
        <button onClick={() => {}}> Calculate Calories </button>
        {name && <p>Your Name: {name}</p>}
        {number && <p>Your Number: {number}</p>}
        {date && <p>Your B-date: {date}</p>}
        {gender !== undefined && (
          <p>Your Gender: {gender ? "Male" : "Female"}</p>
        )}
      </form>
    </>
  );
}

export default App;
