import axios from "axios";
import { Card } from "../interfaces/Card";


const api: string = `${process.env.REACT_APP_API}/carts`;

export function createCart(userId: string) {
  return axios.post(api, { userId, products: [], active: true });
}