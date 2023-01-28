import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FirebaseAuth } from "../firebase/config";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { login, logout } from "../store/auth/authSlice";
import { CheckingAuth } from "../ui/components/CheckingAuth";

export const AppRouter = ({ children }) => {
	const { status, uid } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async (user) => {
			console.log("Auth state changed");
			if (!user) {
				console.log("There is NOT a logged in user");
				dispatch(logout());
			} else {
				console.log("There is a logged in user");
				const { uid, email, displayName, photoURL } = user;
				dispatch(login({ uid, email, displayName, photoURL }));
			}
		});
	}, []);

	if (status === "checking") return <CheckingAuth />;

	return (
		<Routes>
			{status === "not-authenticated" ? (
				<>
					<Route path="/auth/*" element={<AuthRoutes />} />
					<Route path="/*" element={<Navigate to={"/auth"} />} />
				</>
			) : (
				<Route path="/*" element={<JournalRoutes />} />
			)}
		</Routes>
	);
};
