import axios from "axios";

export const loginUser = (credentials, onSuccess) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const response = await axios.post("https://reqres.in/api/login", credentials);
    const token = response.data.token;
    localStorage.setItem("authToken", token);
    dispatch({ type: "LOGIN_SUCCESS", payload: token });
    onSuccess(); // Navigate after successful login
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.error || "Login failed",
    });
  }
};

export const checkUser =()=>async(dispatch)=>{
  try {
    const token = localStorage.getItem("authToken");;
    if(token){
      dispatch({type:"USER_FETCH_SUCCESS"});
    }
  } catch (error) {
    dispatch({
      type:"USER_FETCH_FAILURE"
    })
  }
}