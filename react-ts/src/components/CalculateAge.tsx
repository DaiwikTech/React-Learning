import { useState } from "react";

interface CalculateAgeProps {
  birthDate?: string;
}

const CalculateAge: React.FC<CalculateAgeProps> = ({ birthDate }) => {
  const [dob, setDob] = useState<string>(birthDate || "");
  const [age, setAge] = useState<number | null>(null);

  const calculateAge = () => {
    if (!dob) return;
    const today = new Date();
    const birth = new Date(dob);

    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Calculate Age</h1>
      <label>
        Enter Your Birth Date:
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.currentTarget.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={calculateAge}>Calculate Age</button>

      {age !== null && <p>Your Age is: {age} years</p>}
    </div>
  );
};

export default CalculateAge;
