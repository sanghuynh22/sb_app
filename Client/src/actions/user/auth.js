export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const authLogin = (currentUser) => ({
	type: AUTH_LOGIN,
	payload: currentUser,
});

export const authLogout = () => ({
	type: AUTH_LOGOUT,
});
