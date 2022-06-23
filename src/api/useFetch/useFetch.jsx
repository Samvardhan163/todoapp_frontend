import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function (url) {
  {
    const [data, setdata] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, seterror] = useState(null);
    useEffect(() => {
      const abortCont = new AbortController();
      setTimeout(() => {
        axios
          .get(url)
          .then((res) => {
            if (res.status !== 200) {
              console.log(res);
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
      }, 1000);
      return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error };
  }
}
