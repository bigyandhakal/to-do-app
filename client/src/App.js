import { useEffect, useState } from "react";

// const App = () => {
//   const [persons, setPersons] = useState([
//     {
//       name: "Bigyan",
//       sex: "Male",
//       dob: "2001",
//     },
//     {
//       name: "Aakriti",
//       sex: "Female",
//       dob: "2004",
//     },
//   ]);

//   const handleChange = (index, name) => {
//     const newArr = [...persons];
//     newArr[index] = { ...newArr[index], name: name };
//     setPersons(newArr);
//   };
//   return (
//     <>
{
  /* I am {person?.name}, my gender is {person?.sex} and my age is{" "}
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
      /> */
}

{
  /* {persons && persons.length > 0 ? (
        persons.map((person, index) => {
          return (
            <div key={index}>
              <input
                onChange={(event) => handleChange(index, event.target.value)}
              />
              <div>
                <p>{person?.name}</p>
                <p>{person?.sex}</p>
                <p>{person?.dob}</p>
                <hr />
              </div>
            </div>
          );
        })
      ) : (
        <>NO data</>
      )}
    </>
  );
}; */
}

// No dependency [timers]
// Empty array []
// Array with some dependency [prop, state]

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [err, setError] = useState(null);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount((count)=>count + 1)
  //   }, 1000)
  // })
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((d) => d.json())
        .then((d) => setData(d))
        .catch((e) => setError(e))
        .finally();
    };
    fetchData();
  }, []);

  return (
    <>
    {data && data.length >0 ? (
      data.map(()=>{
        
      })
    ):(<>NO data found</>)}
   </>
  )
};

export default App;
