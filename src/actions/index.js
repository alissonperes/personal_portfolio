import axios from 'axios';
import { queryForUser, queryForProjects } from './queries';

console.log(process.env.REACT_APP_GITHUB_API_KEY);
const axiosOptions = query => ({
  url: 'https://api.github.com/graphql',
  headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}` },
  method: 'post',
  data: {
    query,
  },
});

const getMainData = () => ({
  type: 'GET_USERDATA',
  payload: axios(axiosOptions(queryForUser)),
});

const getAllProjects = () => ({
  type: 'GET_PROJECTS',
  payload: axios(axiosOptions(queryForProjects)),
});

export { getMainData, getAllProjects };
