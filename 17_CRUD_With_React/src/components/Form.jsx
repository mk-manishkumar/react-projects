import React, { useState } from "react";
import { postData } from "../api/PostApi";

const Form = ({ data, setData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  // form submission
  const handleFormSubmit = () => {
    e.preventdefault();
    addPostData();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Add Title" autoComplete="off" name="title" value={addData.title} onChange={handleInputChnage} />
        <input type="text" placeholder="Add Post" autoComplete="off" name="body" onChange={handleInputChnage} value={addData.body} />
        <button type="submit">ADD</button>
      </form>
    </>
  );
};

export default Form;
