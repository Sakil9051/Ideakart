import axios from "axios";

export function Singup(data = {}) {
    return axios.post("http://localhost:3000/User-data", {
      name: data.name,
      email: data.email,
      Phone_number: data.mobile,
      Password:data.Password
    });
  }