import { useState } from "react";
import BasicTable from "../components/basic-table";
import ManageContact from "../components/dialogs/manage-contact";
import ContactModel from "../models/contact.model";

const ManageContacts = () => {
    const contacts: ContactModel[] = [];
    const columns = [];
    const [selected, setSelected] = useState<ContactModel | undefined>(undefined);

    return (
        <main>
            <h1>Manage Contacts</h1>
            <p>Create, modify, delete events and manage membership</p>

            <BasicTable rows={contacts} columns={columns} selected={selected} setSelected={setSelected}  />

            <ManageContact />
        </main>
    )
}

export default ManageContacts;