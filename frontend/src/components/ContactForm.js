import React, { useState } from "react";
import API from "../api";

const ContactForm = ({ fetchContacts }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", form);
    setForm({ name: "", email: "", phone: "" });
    fetchContacts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;