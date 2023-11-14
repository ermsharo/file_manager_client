import { useState, useEffect } from 'react';

interface UseFetchProps<T> {
  url: string;
}

interface UseFetchState<T> {
  data: T | null | any;
  error: boolean;
  isLoading: boolean;
  refetchData: () => void;
}

export const GetData = <T>({ url }: UseFetchProps<T>): UseFetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  

  const fetchData = async (): Promise<void> => {
    setError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Fetch error: ${response.statusText}`);
      }
      const responseData: T = await response.json();
      setData(responseData);
      console.log("Data requested", responseData);
      setIsLoading(false);
    } catch (error) {
      if(url != "") setError(true);
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

  const refetchData = (): void => {
    fetchData();
  };

  return { data, error, isLoading, refetchData };
};


