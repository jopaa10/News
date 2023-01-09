const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";
export const fetchAllStories = async (query, page) => {
  return fetch(`${API_ENDPOINT}query=${query}&page=${page}`);
};
