const initialState = {
    users: [],
    totalPages: 0,
    loading: false,
    error: null,
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS_REQUEST":
        return { ...state, loading: true, error: null };
      case "FETCH_USERS_SUCCESS":
        return {
          ...state,
          loading: false,
          users: action.payload.users,
          totalPages: action.payload.totalPages,
        };
      case "FETCH_USERS_FAILURE":
        return { ...state, loading: false, error: action.payload };
  
      case "UPDATE_USER_SUCCESS":
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload.id ? { ...user, ...action.payload } : user
          ),
        };
  
      case "DELETE_USER_SUCCESS":
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
  