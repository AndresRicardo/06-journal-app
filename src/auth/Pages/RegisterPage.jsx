import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import React, { useMemo, useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";

const formData = {
	displayName: "",
	email: "",
	password: "",
};

const formValidations = {
	displayName: [(value) => value.length >= 1, "Name is required"],
	email: [(value) => value.includes("@"), "The email must include '@' sign"],
	password: [
		(value) => value.length > 5,
		"The password must have more than 5 characters",
	],
};

export const RegisterPage = () => {
	const dispatch = useDispatch();
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const { status, registerErrorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(
		() => status === "checking",
		[status]
	);
	const {
		formState,
		displayName,
		email,
		password,
		onInputChange,
		displayNameError,
		emailError,
		passwordError,
		formError,
	} = useForm(formData, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();
		setIsFormSubmitted(true);
		if (formError) return;
		if (isCheckingAuthentication) return;

		dispatch(startCreatingUserWithEmailAndPassword(formState));
	};

	return (
		<AuthLayout title="Register">
			<form onSubmit={onSubmit}>
				<Grid container direction="column">
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							name="displayName"
							value={displayName}
							label="Full Name"
							type="text"
							placeholder="Jhon Doe"
							fullWidth
							onChange={onInputChange}
							error={!!displayNameError && isFormSubmitted}
							helperText={
								isFormSubmitted ? displayNameError : false
							}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							name="email"
							value={email}
							label="Email"
							type="email"
							placeholder="Example@gmail.com"
							fullWidth
							onChange={onInputChange}
							error={!!emailError && isFormSubmitted}
							helperText={isFormSubmitted ? emailError : false}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							name="password"
							value={password}
							label="Password"
							type="password"
							placeholder="Password"
							fullWidth
							onChange={onInputChange}
							error={!!passwordError && isFormSubmitted}
							helperText={isFormSubmitted ? passwordError : false}
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2 }}>
						<Grid
							item
							xs={12}
							display={!!registerErrorMessage ? "" : "none"}
						>
							<Alert severity="error">
								{registerErrorMessage}
							</Alert>
						</Grid>

						<Grid item xs={12}>
							<Button
								disabled={isCheckingAuthentication}
								type="submit"
								variant="contained"
								fullWidth
							>
								Create account
							</Button>
						</Grid>
					</Grid>
					<Grid
						container
						direction={"row"}
						justifyContent={"space-between"}
					>
						<Typography mr={2}>
							Do you already have an account?
						</Typography>
						<Link component={LinkRouter} to="/auth/login">
							Login
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
