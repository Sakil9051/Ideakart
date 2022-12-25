import axios from "axios";

export function Singup(data = {}) {
    return axios.post("https://combative-pink-beetle.cyclic.app/users", {
      name: data.name,
      email: data.email,
      Phone_number: data.mobile,
      Password:data.Password
    });
  }


  export function Singinuser(data={}) {
    return axios.get("https://combative-pink-beetle.cyclic.app/users", {
      params: {
        email:data.email,
        Password:data.Password
      }
    });
  }
  export function Existinguser(email) {
    return axios.get("https://combative-pink-beetle.cyclic.app/users", {
      params: {
        email:email
      }
    });
  }
