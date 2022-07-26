import { Dialog } from "primereact/dialog";

import ContactModel from "../../models/contact.model";
import EditContactForm from "./forms/edit-contact.form";

import "./forms/form.styles.css";

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
			header="Manage Member"
			footer={footer}
			onHide={onHide}
			position="right"
			modal
			style={{ width: "550px", height: "90vh" }}
		>
			<EditContactForm member={member} />
		</Dialog>
	);
};

export default ManageMemberDialog;
