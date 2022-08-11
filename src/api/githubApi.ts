import axios from "axios";

const github = axios.create({
  baseURL: 'https://api.github.com/',
});

export const getUserRepos = async (username: string) => {
  const response = await github.get(`users/${ username }/repos`, {
    headers: {
      accept: 'application/vnd.github+json',
    },
  });

  return response;
};

export default github;