import React, { useEffect } from "react";
import { getPost } from "./api/PostApi";

const App = () => {
  const getPostData = async () => {
    const res = await getPost();
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      {/*  */}
      {/*  */}
    </div>
  );
};

export default App;
