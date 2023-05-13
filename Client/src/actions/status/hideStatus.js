import axios from "axios";

export const HIDE_STATUS_REQUEST = "HIDE_STATUS_REQUEST";
export const HIDE_STATUS_SUCCESS = "HIDE_STATUS_SUCCESS";
export const HIDE_STATUS_FAILURE = "HIDE_STATUS_FAILURE";

export const hideStatusRequest = () => ({
	type: HIDE_STATUS_REQUEST,
});

export const hideStatusSuccess = (status) => ({
	type: HIDE_STATUS_SUCCESS,
	payload: status,
});

export const hideStatusFailure = (error) => ({
	type: HIDE_STATUS_FAILURE,
	payload: error,
});

export const hideStatus = ({ statusId, userId }) => {
	return (dispatch) => {
		dispatch(hideStatusRequest());
		return axios
			.put(`http://localhost:3000/api/users/hide-status`, {
				statusId,
				userId,
			})
			.then((response) => {
				const user = response.data;
				dispatch(hideStatusSuccess(user));
				return Promise.resolve(user);
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(hideStatusFailure(errorMsg));
				return Promise.reject(errorMsg);
			});
	};
};
