const initstate = {
  userData: null,
  fetching: false,
  fetched: false,
  error: null,
};

const user = (state = initstate, action) => {
  switch (action.type) {
    case 'GET_USERDATA_PENDING': {
      return { ...state, fetching: true };
    }
    case 'GET_USERDATA_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'GET_USERDATA_FULFILLED': {
      return {
        ...state,
        fetched: true,
        fetching: false,
        userData: action.payload.data.data.user,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
