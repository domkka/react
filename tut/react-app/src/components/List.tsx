interface Blog {
  id: number;
  title: string;
  body: string;
  author: string;
}

interface ListProps {
  blogs: Blog[];
  title: string;
}

function List(props: ListProps) {
  const blogs = props.blogs;
  const listtitle = props.title;
  return (
    <>
      <h1 id="list-title">{listtitle}</h1>
      {blogs.map((blog) => (
        <a
          className="blog-preview"
          key={blog.id}
          href="https://www.google.com/"
          target="_blank"
        >
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </a>
      ))}
    </>
  );
}
export default List;
