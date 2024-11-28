import axios from "axios";
import { User } from "../interfaces/User";


const api: string = `${process.env.REACT_APP_API}/users`;

export function createUser(user: User) {
  return axios.post(api,user);
}