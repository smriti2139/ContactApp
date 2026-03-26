import axios from "axios";

const API = axios.create({
  baseURL: "https://contactapp-tt0y.onrender.com/api/contacts"
});

export default API;