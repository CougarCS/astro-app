import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import Dashboard from "./screens/dashboard.screen";
import ManageContacts from "./screens/manage-contacts.screen";
import ManageEvents from "./screens/manage-events.screen";

const AppRouter = () => {
    return (
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="contacts" element={<ManageContacts />} />
					<Route path="events" element={<ManageEvents />} />
				</Route>
			</Routes>
		</BrowserRouter>
    )
}

export default AppRouter;