import { useState, useEffect } from "react";

export const GetData = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Fetch error: ${response.statusText}`);
      }
      const responseData = await response.json();
      setData(responseData);
      console.log("Data requested", responseData);
      setIsLoading(false);
    } catch (error) {
      if (url != "") setError(true);
      console.error("error here", error.toString());
      setData(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  const refetchData = () => {
    fetchData();
  };

  return { data, error, isLoading, refetchData };
};
