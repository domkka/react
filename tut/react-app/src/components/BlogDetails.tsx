import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

interface Blog {
  id: number;
  title: string;
  body: string;
  author: string;
}

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      <div className="blog-details-content">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p> Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete Blog</button>
          </article>
        )}
      </div>
    </div>
  );
}
export default BlogDetails;
