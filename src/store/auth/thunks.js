import {
	registerUserWithEmailAndPassword,
	logInWithEmailAndPassworddd,
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

export const startSigninWithEmailAndPassword = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		//consultar email en los usuarios de firebase
		//si email SI existe y contraseña es OK => dispatch(login(user(result)))
		//si email SI existe y contraseña es FAIL =>  dispatch(logout(result)) y mostrar error
		//si email NO existe => dispatch(logout(result)) y mostrar error

		const result = await logInWithEmailAndPassworddd(email, password);

		if (!result.ok) {
			console.log("signinWithEmailAndPassworddd result = FAIL");
			return dispatch(logout(result));
		}

		dispatch(login(result));
	};
};
