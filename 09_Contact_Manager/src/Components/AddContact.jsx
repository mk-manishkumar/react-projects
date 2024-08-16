import React, { useState } from "react";

const AddContact = ({addContact}) => {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("Please fill all the details");
      return;
    }
    addContact(contactData);
    setContactData({ name: "", email: "" });
  };

  return (
    <div className="contact-form">
      <h3>Add Contact</h3>
      <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" placeholder="Enter name" name="name" value={contactData.name} onChange={handleChange} />
        <label htmlFor="">Email:</label>
        <input type="email" placeholder="Enter email" name="email" value={contactData.email} onChange={handleChange} />
      </form>
      <button className="btn" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
