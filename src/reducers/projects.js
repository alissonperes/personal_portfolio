const initstate = {
  projectsList: [],
  fetching: false,
  fetched: false,
  error: null,
};

const projects = (state = initstate, action) => {
  switch (action.type) {
    case 'GET_PROJECTS_PENDING': {
      return { ...state, fetching: true };
    }
    case 'GET_PROJECTS_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'GET_PROJECTS_FULFILLED': {
      return {
        ...state,
        fetched: true,
        fetching: false,
        projectsList: action.payload.data.data.user.pinnedItems.nodes,
      };
    }
    default: {
      return state;
    }
  }
};

export default projects;
