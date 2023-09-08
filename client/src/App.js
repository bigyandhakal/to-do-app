import { useEffect, useState } from "react";
import Posts from "./Posts";
import "./Post.module.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((e) => console.log(e))
      .finally(() => {});
  });

  return (
    <>
    <Posts posts={posts}/>
    </>
  )

};



export default App;
