import { useState } from "react";
import List from "./List";

interface Blog {
  id: number;
  title: string;
  body: string;
  author: string;
}

function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="homescreen">
      <List blogs={blogs} title="All Blogs" />
      <List
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Marios Blogs"
      />
    </div>
  );
}
export default Home;
