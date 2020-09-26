import axios from 'axios';
import { queryForUser, queryForProjects } from './queries';
import { personalAccessToken } from '../personalTokens';

console.log(personalAccessToken);
const axiosOptions = query => ({
  url: 'https://api.github.com/graphql',
  headers: { Authorization: `Bearer ${personalAccessToken}` },
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
