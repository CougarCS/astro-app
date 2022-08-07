import { useState } from "react";
import { Toolbar } from "primereact/toolbar";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import useSWR from "swr";
import { API_BASE_URL } from "../../utils/config";
import ManageMemberDialog from "./manage-members.dialog";
import ContactModel from "../../models/contact.model";
import MemberModel from "../../models/contact.model";
import ManageMembersInfo from "./manage-members.info";
import { fetcher } from "../../utils/fetcher";

const ManageMembers = () => {
	const { data: members, error } = useSWR<ContactModel[], Error>(
		`${API_BASE_URL}/member/all`,
		fetcher
	);
	const [selected, setSelected] = useState<MemberModel | undefined>(undefined);
	const [filters, setFilters] = useState<DataTableFilterMeta>(
		ManageMembersInfo.getTableFilters()
	);
	const [globalFilterValue, setGlobalFilterValue] = useState("");
	const [memberDialogVisible, setMemberDialogVisible] =
		useState<boolean>(false);

	const onAddClick = () => {
		console.log("Add clicked!");
	};

	const onManageClick = () => {
		setMemberDialogVisible(true);
	};

	const toolbarLeft = (
		<>
			<Button
				disabled={!members}
				label="Add"
				icon="pi pi-plus"
				onClick={onAddClick}
			/>
			<div className="s-1" />
			<Button
				label="Manage"
				icon="pi pi-cog"
				disabled={!selected || !members}
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

	const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _filters = { ...filters };
		_filters["global"].value = value;

		setFilters(_filters);
		setGlobalFilterValue(value);
	};

	const renderHeader = () => {
		return (
			<div className="flex justify-content-end">
				<span className="p-input-icon-left">
					<i className="pi pi-search" />
					<InputText
						value={globalFilterValue}
						onChange={onGlobalFilterChange}
						placeholder="Keyword Search"
					/>
				</span>
			</div>
		);
	};
	const header = renderHeader();

	return (
		<main>
			<h1>Members</h1>
			<p>Create and manage members</p>
			{error ? (
				<>
					<h1 className="text-danger flex align-items-center">
						<i className="pi pi-times-circle" style={{ fontSize: "1em" }} />
						<div style={{ marginLeft: ".5em" }}>Error Fetching Members</div>
					</h1>
				</>
			) : (
				<>
					<Toolbar left={toolbarLeft} />

					<div className="s-1" />
					<DataTable
						value={members}
						paginator
						showGridlines
						responsiveLayout="scroll"
						paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
						currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
						rows={10}
						rowsPerPageOptions={[10, 20, 50]}
						loading={!members}
						dataKey="uh_id"
						filters={filters}
						globalFilterFields={ManageMembersInfo.getGlobalFilterFields()}
						emptyMessage="No members found."
						header={header}
						selectionMode="single"
						selection={selected}
						onSelectionChange={(e) => setSelected(e.value)}
					>
						{ManageMembersInfo.getDefaultColumns().map(({ field, header }) => (
							<Column
								key={field}
								field={field}
								header={header}
								filter
								filterPlaceholder={`Search by ${header}`}
								filterField={field}
								sortable
							/>
						))}
					</DataTable>

					{renderMemberDialog()}
				</>
			)}
		</main>
	);
};

export default ManageMembers;
