import { combineReducers } from "redux";
import authReducer from "./user/auth";
import fetchUserReducer from "./user/fetchUser";
import fetchAllUsersReducer from "./user/fetchAllUsers";
import registerUserReducer from "./user/registerUser";
import loginUserReducer from "./user/loginUser";
import addFriendReducer from "./user/addFriend";
import createStatusReducer from "./status/createStatus";
import getAllStatusReducer from "./status/getAllStatus";
import deleteStatusReducer from "./status/deleteStatus";
import hideStatusReducer from "./status/hideStatus";
import likeStatusReducer from "./status/likeStatus";
import createCommentReducer from "./status/createComment";

const rootReducer = combineReducers({
	user: combineReducers({
		auth: authReducer,
		fetchUser: fetchUserReducer,
		fetchAllUsers: fetchAllUsersReducer,
		registerUser: registerUserReducer,
		loginUser: loginUserReducer,
		addFriend: addFriendReducer,
	}),
	status: combineReducers({
		createStatus: createStatusReducer,
		getAllStatus: getAllStatusReducer,
		deleteStatus: deleteStatusReducer,
		hideStatus: hideStatusReducer,
		likeStatus: likeStatusReducer,
		createComment: createCommentReducer,
	}),
});

export default rootReducer;
