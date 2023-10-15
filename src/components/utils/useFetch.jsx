import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const getData = axios.get(endpoint);
      getData
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 2000);
  }, [endpoint]);

  return { data, loading };
};
