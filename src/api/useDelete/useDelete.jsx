import axios from "axios";

export default function (url) {
  axios
    .delete(url, { headers: { "Content-Type": "application/json" } })
    .then((response) => {
      console.log(response);
    });
}
