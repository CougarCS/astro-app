import { useEffect, useState } from "react";

import BasicTable from "../../components/basic-table";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

import ManageMemberDialog from "./manage-members.dialog";
import ContactModel from "../../models/contact.model";
import MemberModel from "../../models/contact.model";
import MemberService from "../../services/MemberService";
import ManageMembersInfo from "./manage-members.info";

const ManageMembers = () => {
	const [members, setMembers] = useState<ContactModel[]>([]);
	const [selected, setSelected] = useState<MemberModel | undefined>(undefined);

	const [memberDialogVisible, setMemberDialogVisible] =
		useState<boolean>(false);

	useEffect(() => {
		const getData = async () => {
			const data = await MemberService.getMembers();
			setMembers(data);
		};

		getData();
	}, []);

	const onAddClick = () => {
		console.log("Add clicked!");
	};

	const onManageClick = () => {
		setMemberDialogVisible(true);
	};

	const toolbarLeft = (
		<>
			<Button label="Add" icon="pi pi-plus" onClick={onAddClick} />
			<div className="s-1" />
			<Button
				label="Manage"
				icon="pi pi-cog"
				disabled={!selected}
				className="p-button-secondary"
				onClick={onManageClick}
			/>
		</>
	);

	const renderMemberDialog = () => {
		if (!selected) return undefined;
		return (
			<ManageMemberDialog
				member={selected}
				visible={memberDialogVisible}
				setVisible={setMemberDialogVisible}
			/>
		);
	};

	return (
		<main>
			<h1>Members</h1>
			<p>Create and manage members</p>

			<Toolbar left={toolbarLeft} />

			<div className="s-1" />

			<BasicTable
				rows={members}
				columns={ManageMembersInfo.getColumns()}
				defaultColumns={ManageMembersInfo.getDefaultColumns()}
				selected={selected}
				setSelected={setSelected}
				filters={ManageMembersInfo.getTableFilters()}
				globalFilterFields={ManageMembersInfo.getGlobalFilterFields()}
				height="450px"
			/>

			{renderMemberDialog()}
		</main>
	);
};

export default ManageMembers;
