const initialState = [
  'JavaScript (ES5/ES6)',
  'ReactJS',
  'Ruby on Rails',
  'React/Redux',
  'HTML5 & CSS3',
  'Bootstrap',
  'Es6',
  'Redux',
  'redux-thunk',
  'Python',
  'SQL',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'Jest',
  'Capybara',
  'Git & Github',
  'Webpack',
  'Heroku',
  'Rspec',
  'Pair Programming',
  'Communication Skills',
  'Problem Solving',
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
