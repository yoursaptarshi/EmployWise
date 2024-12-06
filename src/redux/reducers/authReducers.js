const initialState = {
    token: null,
    loading: false,
    error: null,
    isAuthenticated:false
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return { ...state, loading: true, error: null };
      case "LOGIN_SUCCESS":
        return { ...state, loading: false, token: action.payload,isAuthenticated:true };
      case "LOGIN_FAILURE":
        return { ...state, loading: false, error: action.payload,isAuthenticated:false };
      case "USER_FETCH_SUCCESS":
        return {...state,loading:false,isAuthenticated:true}
      case "USER_FETCH_FAILURE":
        return {...state,loading:false,isAuthenticated:false}
      default:
        return state;
    }
  };
  
  
  