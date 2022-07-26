import { useState } from "react";

import BasicTable from "../../../components/basic-table";
import ManageEventDialog from "./manage-event.dialog";
import ColumnField from "../../../models/table.model";

const ManageEvents = () => {
	const events: Event[] = [];
	const columns: ColumnField[] = [];
	const [selected, setSelected] = useState<Event | undefined>(undefined);

	return (
		<main>
			<h1>Manage Events</h1>
			<p>Create, modify, delete events and manage event attendance</p>

			<h3>Upcoming Events</h3>

			<BasicTable
				rows={events}
				columns={columns}
				selected={selected}
				setSelected={setSelected}
			/>

			<ManageEventDialog />
		</main>
	);
};

export default ManageEvents;
