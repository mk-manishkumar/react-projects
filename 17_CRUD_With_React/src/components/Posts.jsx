import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";

const Posts = () => {
  const [data, setData] = useState([]);

  // get data
  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  // delete post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPsts = data.filter((currentPost) => {
          return currentPost.id !== id;
        });
        setData(newUpdatedPsts);
      } else {
        console.log("Deletion failed", res.status);
      }
    } catch (error) {
      console.log(error);
    }
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
              <button onClick={() => handleDeletePost(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
