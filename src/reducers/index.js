import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import languages from './languages';
import experience from './experience';

export default combineReducers({
  user,
  projects,
  languages,
  experience,
});
