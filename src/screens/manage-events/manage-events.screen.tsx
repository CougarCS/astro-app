import { useState } from "react";

import ColumnField from "../../models/table.model";
import BasicTable from "../../components/basic-table";
import ManageEventDialog from "./manage-event.dialog";
import EventModel from "../../models/event.model";

const ManageEvents = () => {
	const events: EventModel[] = [];
	const columns: ColumnField[] = [];
	const [selected, setSelected] = useState<EventModel | undefined>(undefined);

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
