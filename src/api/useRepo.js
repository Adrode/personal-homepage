import { useState, useEffect } from "react";

export const useRepo = () => {
  
  const [repoData, setRepoData] = useState({
    status: "loading",
  });

  const fetchRepoData = async () => {
    try {
      const response = await fetch("https://api.github.com/users/Adrode/repos");

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setRepoData({
        status: "success",
        rest: response.json(),
      });
    }
    catch (error) {
      setRepoData({
        status: "error",
      });
    }
  }

  useEffect(() => {
    setTimeout(fetchRepoData, 2000);
  }, [])

  return repoData;
};