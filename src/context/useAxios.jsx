import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://restcountries.com/v3.1";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);
  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};
