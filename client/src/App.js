import { useEffect, useState } from "react";
// import Posts from "./Posts";
import Lists from "./Todo";
import "./Post.module.css";

const App = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/api/v1/todos/")
      .then((res) => res.json())
      .then((data) => setLists(data))
      .catch((e) => console.log(e))
      .finally(() => {});
  },[]);

  return (
    <>
    <Lists lists={lists}/>
    </>
  )

};



export default App;
