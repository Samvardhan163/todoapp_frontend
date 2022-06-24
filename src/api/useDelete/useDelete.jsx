import axios from "axios";

export default function (url) {
  return axios.delete(url, { headers: { "Content-Type": "application/json" } });
}
