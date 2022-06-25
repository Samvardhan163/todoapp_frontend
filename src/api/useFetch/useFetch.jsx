import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setdata] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, seterror] = useState(null);

  const fetchTodos = () => {
    axios
      .get(url)
      .then((res) => {
        if (res.status !== 200) {
          throw Error("Data is not fetched");
        }
        return res.data;
      })
      .then((data) => {
        setdata(data);
        setPending(false);
        seterror(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setPending(false);
          seterror(err.message);
        }
      });
  };

  useEffect(() => {
    fetchTodos();
  }, [url]);

  const refetch = () => {
    fetchTodos();
  };

  return { data,error,refetch };
}
