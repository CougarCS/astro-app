import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import ContactModel from "../../models/contact.model";

interface Props {
	member: ContactModel;
	visible: boolean;
	setVisible: (value: React.SetStateAction<boolean>) => void;
}

const ManageMemberDialog = ({ member, visible, setVisible }: Props) => {
	const onHide = () => {
		setVisible(false);
	};

	const footer = <></>;

	return (
		<Dialog
			visible={visible}
			footer={footer}
			modal
			onHide={onHide}
			position="right"
			style={{ width: "40vw", height: "90vh" }}
		>
			<h3>{`${member.first_name} ${member.last_name}`}</h3>
			<p>{member.contact_id}</p>

			<div className="s-1" />

			<p>Email:</p>
			<p>UH ID:</p>
			<p>Phone Number:</p>

			<div className="s-2" />

			<h4>Membership Information</h4>

			<div className="s-1" />

			<p>Status:</p>
			<p>Start Date:</p>
			<p>End Date:</p>
			<p>Grant Reason:</p>

			<Button label="Update Membership" />
		</Dialog>
	);
};

export default ManageMemberDialog;
