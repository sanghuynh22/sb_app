import axios from "axios";

export const FETCH_ALL_USERS_REQUEST = "FETCH_ALL_USERS_REQUEST";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_USERS_FAILURE = "FETCH_ALL_USERS_FAILURE";

export const fetchAllUsersRequest = () => ({
	type: FETCH_ALL_USERS_REQUEST,
});

export const fetchAllUsersSuccess = (user) => ({
	type: FETCH_ALL_USERS_SUCCESS,
	payload: user,
});

export const fetchAllUsersFailure = (error) => ({
	type: FETCH_ALL_USERS_FAILURE,
	payload: error,
});

export const fetchAllUsers = () => {
	return (dispatch) => {
		dispatch(fetchAllUsersRequest());
		axios
			.get("http://localhost:3000/api/users/")
			.then((response) => {
				const users = response.data;
				dispatch(fetchAllUsersSuccess(users));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchAllUsersFailure(errorMsg));
			});
	};
};
