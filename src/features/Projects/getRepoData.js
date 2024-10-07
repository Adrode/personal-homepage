export const getRepoData = async () => {
  const response = await fetch("https://api.github.com/users/Adrode/repos");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};