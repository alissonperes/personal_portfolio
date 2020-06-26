const initialState = [
  'JavaScript (ES5/ES6)',
  'Ruby',
  'HTML',
  'CSS',
  'Ruby on Rails',
  'React',
  'Redux',
  'Redux-Thunk',
  'Python',
  'Bootstrap',
  'SQL',
  'RSpec',
  'Jest',
  'Capybara',
  'Git',
  'GitHub',
  'Webpack',
  'Heroku',
];

const languages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LANGUAGE': {
      return state.push(action.language);
    }
    default: {
      return state;
    }
  }
};

export default languages;
