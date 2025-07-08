import axios from "axios";

const instance = axios.create({
  baseURL: "https://indievibe-backend-9e9e.onrender.com",
});

export default instance;
