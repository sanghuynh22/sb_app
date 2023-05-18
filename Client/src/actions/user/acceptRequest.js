import axios from "axios";

export const ACRRPT_FRIEND_REQUEST = "ACRRPT_FRIEND_REQUEST";
export const ACRRPT_FRIEND_SUCCESS = "ACRRPT_FRIEND_SUCCESS";
export const ACRRPT_FRIEND_FAILURE = "ACRRPT_FRIEND_FAILURE";

export const acceptRequestFriendRequest = () => ({
	type: ACRRPT_FRIEND_REQUEST,
});

export const acceptRequestFriendSuccess = (friend) => ({
	type: ACRRPT_FRIEND_SUCCESS,
	payload: friend,
});

export const acceptRequestFriendFailure = (error) => ({
	type: ACRRPT_FRIEND_FAILURE,
	payload: error,
});

export const acceptRequestFriend = (data) => {
	return (dispatch) => {
		dispatch(acceptRequestFriendRequest());
		return axios
			.post("http://localhost:3000/api/users/accept-friend-request", data)
			.then((response) => {
				const friend = response.data;
				dispatch(acceptRequestFriendSuccess(friend));
				return Promise.resolve(friend);
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(acceptRequestFriendFailure(errorMsg));
				return Promise.reject(errorMsg);
			});
	};
};
