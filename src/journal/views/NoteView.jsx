import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
	return (
		<Grid
			container
			direction="column"
			justifyContent={"space-between"}
			alignItems="center"
			sx={{ mb: 1 }}
			width="100%"
		>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Grid item>
					<Typography fontSize={39} fontWeight={"light"}>
						22 January 2022
					</Typography>
				</Grid>
				<Grid item>
					<Button>
						<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					</Button>
				</Grid>
			</Grid>

			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Type a title"
					label="Title"
					margin="normal"
				/>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="What happened today?"
					label="Description"
					minRows={5}
				/>
			</Grid>

			<ImageGallery />
		</Grid>
	);
};
