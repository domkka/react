import List from "./List";
import useFetch from "../useFetch";

interface Blog {
  id: number;
  title: string;
  body: string;
  author: string;
}

function Home() {
  const data_url = "http://localhost:8000/blogs";
  const { data: blogs, isPending, error } = useFetch(data_url);

  return (
    <div className="homescreen">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <List blogs={blogs} title="All Blogs" />}
    </div>
  );
}
export default Home;
