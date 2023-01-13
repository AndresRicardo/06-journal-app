import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { login, checkingCredentials } from "../../store/auth/authSlice";
import { useForm } from "../../hooks/useForm";
import {
	checkingAuthentication,
	startGoogleSignin,
} from "../../store/auth/thunks";

export const LoginPage = () => {
	const user = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { email, password, onInputChange } = useForm({
		email: "example@gmail.com",
		password: "123456",
	});

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(checkingAuthentication(email, password));
	};

	const onGooglSignIn = (event) => {
		dispatch(startGoogleSignin(email, password));
	};

	return (
		<AuthLayout title="Login">
			<form onSubmit={onSubmit}>
				<Grid container direction="column">
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							name="email"
							value={email}
							label="Email"
							type="email"
							placeholder="Email@gmail.com"
							fullWidth
							onChange={onInputChange}
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
						/>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2 }}>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={user.status === "checking"}
								type="submit"
								variant="contained"
								fullWidth
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={user.status === "checking"}
								onClick={onGooglSignIn}
								variant="contained"
								fullWidth
							>
								<Google />
								<Typography variant="button" sx={{ ml: 1 }}>
									Google
								</Typography>
							</Button>
						</Grid>
					</Grid>
					<Grid
						container
						direction={"row"}
						justifyContent={"flex-end"}
					>
						<Link component={LinkRouter} to="/auth/register">
							Register
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
