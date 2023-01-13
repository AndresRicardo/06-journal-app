import { NothingSelectedView } from "../views/NothingSelectedView";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
	return (
		<JournalLayout>
			<NoteView />

			<IconButton
				size="large"
				sx={{
					color: "white",
					backgroundColor: "error.main",
					":hover": {
						backgroundColor: "error.main",
						opacity: 0.9,
					},
					position: "fixed",
					right: "10px",
					bottom: "10px",
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
