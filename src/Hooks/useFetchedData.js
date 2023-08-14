import { useState, useEffect } from "react";
import axios from "axios";
import { getRandomNumber as getRandomDimension } from "../utilities/Functions";

const useFetchedData = (initialURL, LIMIT) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const randomDimension = getRandomDimension(LIMIT);
  useEffect(() => {
    axios
      .get(initialURL || randomDimension)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [initialURL, LIMIT]);

  return { data, loading, error };
};

export default useFetchedData;
