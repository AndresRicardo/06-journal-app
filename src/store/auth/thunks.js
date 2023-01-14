import {
	registerUserWithEmailAndPassword,
	signinWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignin = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await signinWithGoogle();

		if (!result.ok) {
			return dispatch(logout(result));
		}

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailAndPassword = ({
	email,
	password,
	displayName,
}) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await registerUserWithEmailAndPassword({
			email,
			password,
			displayName,
		});

		if (!result.ok) {
			console.log("registerUserWithEmailAndPassword result = FAIL");
			return dispatch(logout(result));
		}

		dispatch(login(result));
	};
};
