import React, { useEffect, useState } from "react";
import API from "./api";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await API.get("/");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contact Manager</h2>
      <ContactForm fetchContacts={fetchContacts} />
      <ContactList contacts={contacts} fetchContacts={fetchContacts} />
    </div>
  );
}

export default App;