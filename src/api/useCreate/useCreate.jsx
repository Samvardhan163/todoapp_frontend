import React from "react";
import axios from "axios";

export default function useCreate(todo, url) {
  let body = JSON.stringify(todo);
  axios
    .post(url, body, { headers: { "Content-Type": "application/json" } })
    .then((response) => {
      if (response.status != 201) {
        throw Error("Data is not created");
      }
    });
}
