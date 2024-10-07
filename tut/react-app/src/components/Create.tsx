import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <div className="create-content">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body</label>
          <textarea
            rows={8}
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding Blog...</button>}
        </form>
      </div>
    </div>
  );
}
export default Create;
