import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      setIsLoading(false);
      if (!response.ok) {
        setError("Request failed!");
      } else {
        const data = await response.json();
        applyData(data);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  };

  return {
    isLoading,
    error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
