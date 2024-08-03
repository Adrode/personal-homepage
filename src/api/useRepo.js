import { useState, useEffect } from "react";

export const useRepo = () => {
  const token = "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";
  const apiUrl = "https://api.github.com/users/Adrode/repos?access_token=";

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