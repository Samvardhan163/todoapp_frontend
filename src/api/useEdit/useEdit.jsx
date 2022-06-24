import React from "react";
import axios from "axios";
export default function (todo, url) {
  let body = JSON.stringify(todo);
  console.log(todo);
  axios
    .put(url, body, { headers: { "Content-Type": "application/json" } })
    .then((response) => {
      console.log(response.data);
      if (response.status != 200) {
        throw Error("Data is not created");
      }
    });
}
