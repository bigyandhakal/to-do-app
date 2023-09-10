import { useState } from "react";

const App = () => {
  const [person, setPerson] = useState({
    name: "Bigyan",
    sex: "Male",
    dob: "1999",
  });
  return (
    <>
      I am {person?.name}, my gender is {person?.sex} and my date of birth is{" "}
      {2023 - person?.dob}
      <hr />
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) =>
          setPerson((person) => {
            return { ...person, name: event.target.value };
          })
        }
      />
      <select
        onChange={(event) =>
          setPerson((person) => {
            return { ...person, sex: event.target.value };
          })
        }
      >
        <option value="">select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="number"
        placeholder="Enter dob"
        onChange={(event) =>
          setPerson((person) => {
            return { ...person, dob: event.target.value };
          })
        }
      />
    </>
  );
};

export default App;
