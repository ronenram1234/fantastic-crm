import axios, { AxiosResponse } from "axios";
import { User, UserLoginFormValues } from "../interfaces/User";

const api: string = `${process.env.REACT_APP_API}/users`;

export function createUser(user: User) {
  return axios.post(api, user);
}

export function getUser({ email, password }: UserLoginFormValues): Promise <AxiosResponse>{
  // const axios = require("axios");
  const data = {
    email: email,
    password: password,
  };



console.log(`API URL: ${api}/login, Data:`, { email, password });

  return axios.post(`${api}/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
