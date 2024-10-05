import { useState, useEffect } from "react";
import List from "./List";

interface Blog {
  id: number;
  title: string;
  body: string;
  author: string;
}

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("mario");

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setBlogs(data);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="homescreen">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <List blogs={blogs} title="All Blogs" />}
      <button onClick={() => setName("dom")}>change name</button>
      <p>{name}</p>
    </div>
  );
}
export default Home;
