import axios from "axios";

const URL = "http://localhost:3000/cards";

export function getCards() {
  return axios.get(URL).then(res => res.data);
}