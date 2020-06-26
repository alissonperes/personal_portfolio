const initialState = ['Javascript', 'React', 'Redux', 'Ruby on Rails'];

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
