import axios from "axios";
import { User } from "../interfaces/User";


const api: string = `${process.env.REACT_APP_API}/carts`;

export function createUser(userId: string) {
  return axios.post(api, { userId, products: [], active: true });
}