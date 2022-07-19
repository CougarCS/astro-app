import { useState } from "react";
import BasicTable from "../components/basic-table";
import ManageEvent from "../components/manage-event";

const ManageEvents = () => {
    const events = [];
    const columns = [];
    const [selected, setSelected] = useState([]);

    return (
        <main>
            <h1>Manage Events</h1>
            <p>Create, modify, delete events and manage event attendance</p>

            <h3>Upcoming Events</h3>

            <BasicTable rows={events} columns={columns} selected={selected} setSelected={setSelected}  />

            <ManageEvent />
        </main>
    )
}

export default ManageEvents;