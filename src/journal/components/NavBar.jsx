import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";

export const NavBar = ({ drawerWidt = 240 }) => {
	const dispatch = useDispatch();

	const handleLogoutClick = () => {
		dispatch(logout());
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidt}px)` },
				ml: { sm: `${drawerWidt}px` },
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					edge="start"
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuOutlined />
				</IconButton>

				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h6" noWrap component="div">
						JournalApp
					</Typography>

					<IconButton color="error" onClick={handleLogoutClick}>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
