import axios from "axios";
import React, { useEffect, useState } from "react";

export const useApiHooks = (api, params) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(api, { params: params }); // params rakhe ni huncha

      setData(response.data);
    } catch (err) {
      setErr(err?.message);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [load, data, err];
};
