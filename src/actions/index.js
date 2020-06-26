import axios from 'axios';
import { queryForUser, queryForProjects } from './queries';

const personalAccessToken = 'c627483a0e2d88d599a5a0e977ef5ca701de8b16';

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
