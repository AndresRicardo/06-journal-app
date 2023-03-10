import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

// const auth = getAuth();
// signInWithPopup(auth, provider)
// 	.then((result) => {
// 		// This gives you a Google Access Token. You can use it to access the Google API.
// 		const credential = GoogleAuthProvider.credentialFromResult(result);
// 		const token = credential.accessToken;
// 		// The signed-in user info.
// 		const user = result.user;
// 		// ...
// 	})
// 	.catch((error) => {
// 		// Handle Errors here.
// 		const errorCode = error.code;
// 		const errorMessage = error.message;
// 		// The email of the user's account used.
// 		const email = error.customData.email;
// 		// The AuthCredential type that was used.
// 		const credential = GoogleAuthProvider.credentialFromError(error);
// 		// ...
// 	});

const googleProvider = new GoogleAuthProvider();

export const signinWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult(result);
		// console.log(credentials);
		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		// console.log({ error });
		const errorCode = error.code;
		const errorMessage = error.message;
		// const email = error.custonData.email;
		// const credential = GoogleAuthProvider.credentialFromError(error)

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const logInWithEmailAndPassworddd = async (
	typedEmail,
	typedPassword
) => {
	try {
		const result = await signInWithEmailAndPassword(
			FirebaseAuth,
			typedEmail,
			typedPassword
		);
		// const credentials = GoogleAuthProvider.credentialFromResult(result);
		// console.log(credentials);
		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		// console.log({ error });
		const loginErrorCode = error.code;
		const loginErrorMessage = error.message;
		// const email = error.custonData.email;
		// const credential = GoogleAuthProvider.credentialFromError(error)

		return {
			ok: false,
			loginErrorCode,
			loginErrorMessage,
		};
	}
};

export const registerUserWithEmailAndPassword = async ({
	email,
	password,
	displayName,
}) => {
	try {
		const resp = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);

		const { uid, photoURL } = resp.user;
		await updateProfile(FirebaseAuth.currentUser, { displayName });

		return {
			ok: true,
			uid,
			photoURL,
			email,
			displayName,
		};
	} catch (error) {
		return {
			ok: false,
			registerErrorMessage: error.message,
		};
	}
};
