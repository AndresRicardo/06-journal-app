import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const drawerWidt = 240;

export const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: "flex" }}>
			<NavBar drawerWidt={drawerWidt} />

			<SideBar drawerWidth={drawerWidt} />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
