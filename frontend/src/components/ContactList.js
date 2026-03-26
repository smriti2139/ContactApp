import React from "react";
import API from "../api";

const ContactList = ({ contacts, fetchContacts }) => {
  const deleteContact = async (id) => {
    await API.delete(`/${id}`);
    fetchContacts();
  };

  return (
    <div>
      {contacts.map((c) => (
        <div key={c._id}>
          <h4>{c.name}</h4>
          <p>{c.email}</p>
          <p>{c.phone}</p>
          <button onClick={() => deleteContact(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;