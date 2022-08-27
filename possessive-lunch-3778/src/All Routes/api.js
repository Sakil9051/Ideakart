import axios from "axios";

export function Singup(data = {}) {
    return axios.post("http://localhost:3000/User-data", {
      name: data.name,
      email: data.email,
      Phone_number: data.mobile,
      Password:data.Password
    });
  }


  export function Singinuser(data={}) {
    return axios.get("http://localhost:3000/User-data", {
      params: {
        email:data.email,
        Password:data.Password
      }
    });
  }
  export function Existinguser(email) {
    return axios.get("http://localhost:3000/User-data", {
      params: {
        email:email
      }
    });
  }