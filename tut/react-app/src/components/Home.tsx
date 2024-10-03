import { useState } from "react";

function Home() {
  const [name, setName] = useState("dom");
  const [age, setAge] = useState(22);

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleClick = () => {
    setName("nicht mehr dom");
    setAge(age + 1);
  };

  return (
    <div className="homescreen">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
export default Home;
