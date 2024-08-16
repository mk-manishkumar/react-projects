import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactList = (props) => {
  const { contact, removeContact } = props;
  const contactList = contact.map((val) => {
    return (
      <div className="person-block">
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={() => removeContact(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });
  return (
    <div className="contact-list">
      <h3>Contact List</h3>
      <div className="person">{contactList}</div>
    </div>
  );
};

export default ContactList;
