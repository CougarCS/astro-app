import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app";
import Dashboard from "./screens/dashboard/dashboard.screen";
import ManageMembers from "./screens/manage-members/manage-members.screen";
import ManageEvents from "./screens/dashboard/manage-events/manage-events.screen";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="members" element={<ManageMembers />} />
					<Route path="events" element={<ManageEvents />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
