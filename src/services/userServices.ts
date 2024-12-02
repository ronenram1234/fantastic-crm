import axios, { AxiosResponse } from "axios";
import { User, UserLoginFormValues } from "../interfaces/User";

const api: string = `${process.env.REACT_APP_API}/users`;

export function createUser(user: User) {
  return axios.post(api, user);
}

export function getUser({ email, password }: UserLoginFormValues): Promise <AxiosResponse>{
  const axios = require("axios");
  let data = JSON.stringify({
    email: email,
    password: password,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${api}/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios.requests(config);
}
