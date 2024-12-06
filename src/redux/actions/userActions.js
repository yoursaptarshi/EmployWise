import axios from "axios";

export const fetchUsers = (page) => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`);
    dispatch({
      type: "FETCH_USERS_SUCCESS",
      payload: {
        users: data.data, // User list
        totalPages: data.total_pages, // Total number of pages
      },
    });
  } catch (error) {
    dispatch({
      type: "FETCH_USERS_FAILURE",
      payload: error.message,
    });
  }
};



export const updateUser = (id, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`https://reqres.in/api/users/${id}`, updatedData);
    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: { id, ...updatedData },
    });
    console.log(response)
    alert('User updated successfully!');
  } catch (error) {
    console.error('Error updating user:', error);
    alert('Failed to update user.');
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: "DELETE_USER_SUCCESS",
      payload: { id },
    });
    alert('User deleted successfully!');
  } catch (error) {
    console.error('Error deleting user:', error);
    alert('Failed to delete user.');
  }
};
