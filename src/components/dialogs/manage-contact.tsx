import { Button } from 'primereact/button';
import ContactModel from '../../models/contact.model';

interface Props {
    contact: ContactModel;
}

const ManageContact = ({ contact }: Props) => {
    return (
        <div>
            <h3>{`${contact.first_name} ${contact.last_name}`}</h3>
            <p>{contact.contact_id}</p>

            <p>Email:</p>
            <p>UH ID:</p>
            <p>Phone Number:</p>

            <h4>Membership Information</h4>
            <p>Status:</p>
            <p>Start Date:</p>
            <p>End Date:</p>
            <p>Grant Reason:</p>

            <Button label="Update Membership"/>
        </div>
    )
}

export default ManageContact;