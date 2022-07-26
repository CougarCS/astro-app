import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import ContactModel from "../../../models/contact.model";

interface Props {
	member: ContactModel;
}

const EditMembershipForm = ({ member }: Props) => {
	const [disabled, setDisabled] = useState<boolean>(true);

	const saveMembershipChanges = (update: ContactModel) => {
		console.log("Save Changes:", update);
		// invoke api
		// error handling
	};

	const onUpdateClick = () => {
		// init form
		setDisabled(false);
	};

	const onSaveClick = () => {
		saveMembershipChanges(member);
		setDisabled(true);
	};

	const onResetClick = () => {
		// reset form
	};

	const onCancelClick = () => {
		setDisabled(true);
	};

	const renderHeader = () => {
		const height = "50px";

		if (disabled)
			return (
				<div style={{ height }}>
					<h3>{`${member.first_name} ${member.last_name}`}</h3>
				</div>
			);
		return (
			<div style={{ height }} className="flex">
				<InputText value={member.first_name} placeholder="First Name" />
				<div className="s-1" />
				<InputText value={member.last_name} placeholder="Last Name" />
			</div>
		);
	};

	const renderFooter = () => {
		if (disabled)
			return (
				<Button
					label="Update Membership"
					onClick={onUpdateClick}
					className="p-button-secondary p-button-sm"
				/>
			);
		return (
			<div className="flex">
				<Button
					label="Save"
					onClick={onSaveClick}
					className="p-button-success p-button-sm"
				/>
				<div className="s-1" />
				<Button
					label="Reset"
					onClick={onResetClick}
					className="p-button-secondary p-button-sm"
				/>
				<div className="s-1" />
				<Button
					label="Cancel"
					onClick={onCancelClick}
					className="p-button-secondary p-button-sm"
				/>
			</div>
		);
	};

	return (
		<div>
			<h5>Membership Information</h5>
			<p>{member.membership_id}</p>

			<div className="s-1" />

			<div className="form-container">
				<div className="label-input-h">
					<label>Email:</label>
					<InputText
						value={member.email}
						placeholder="Email Address"
						disabled={disabled}
						className="p-inputtext-sm"
					/>
				</div>

				<div className="label-input-h">
					<label>UH ID:</label>
					<InputText
						value={member.uh_id}
						placeholder="UH ID"
						disabled={disabled}
						className="p-inputtext-sm"
					/>
				</div>

				<div className="label-input-h">
					<label>Phone Number:</label>
					<InputText
						value={member.phone_number}
						placeholder="Phone Number"
						disabled={disabled}
						className="p-inputtext-sm"
					/>
				</div>
			</div>

			<div className="s-1" />

			{renderFooter()}
		</div>
	);
};

export default EditMembershipForm;
