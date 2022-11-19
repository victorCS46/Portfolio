import axios, { AxiosInstance } from "axios";

const github: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    accept: 'application/vnd.github+json',
  },
});

export const getUserRepos = async (username: string) => {
  const response = await github.get(`users/${ username }/repos`);
  return response;
};

export const getUser = async (username: string) => {
  const response = await github.get(`users/${ username }`);
  return response;
};

export default github;