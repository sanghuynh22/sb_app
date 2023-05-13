import axios from "axios";

export const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const addFriendRequest = () => ({
	type: ADD_FRIEND_REQUEST,
});

export const addFriendSuccess = (friend) => ({
	type: ADD_FRIEND_SUCCESS,
	payload: friend,
});

export const addFriendFailure = (error) => ({
	type: ADD_FRIEND_FAILURE,
	payload: error,
});

export const addFriend = (friendData) => {
	return (dispatch) => {
		dispatch(addFriendRequest());
		axios
			.post("/api/friends", friendData)
			.then((response) => {
				const friend = response.data;
				dispatch(addFriendSuccess(friend));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(addFriendFailure(errorMsg));
			});
	};
};
