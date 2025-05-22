import axios from "axios";

const publicAxios = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
  },
});

export default publicAxios;