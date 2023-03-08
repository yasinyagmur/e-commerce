import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = async (url) => {
  useEffect(() => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(url, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          },
        });
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
};
