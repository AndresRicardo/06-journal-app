import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		status: "checking", //"not-authenticated", //"checking", "authenticated"
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		registerErrorMessage: null,
		loginErrorMessage: null,
		permissions: [],
	},
	reducers: {
		login: (state, { payload }) => {
			state.status = "authenticated"; //"not-authenticated" , "checking" o "authenticated"
			state.uid = payload.uid;
			state.email = payload.email;
			state.displayName = payload.displayName;
			state.photoURL = payload.photoURL;
			state.registerErrorMessage = null;
			state.loginErrorMessage = null;
			state.permissions = [];
		},

		logout: (state, { payload }) => {
			state.status = "not-authenticated"; //"checking" o "authenticated"
			state.uid = null;
			state.email = null;
			state.displayName = null;
			state.photoURL = null;
			state.registerErrorMessage =
				payload?.registerErrorMessage ||
				state?.registerErrorMessage ||
				null;
			state.loginErrorMessage =
				payload?.loginErrorMessage || state?.loginErrorMessage || null;
			state.permissions = [];
		},

		checkingCredentials: (state) => {
			state.status = "checking";
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
