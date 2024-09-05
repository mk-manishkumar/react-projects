import React, { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";

const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <section className="section-post">
      <ul>
        {data.map((currentElement) => {
          const { id, body, title } = currentElement;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
