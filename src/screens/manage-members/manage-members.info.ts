import { ColumnField } from "../../models/table.model";
import { FilterMatchMode } from "primereact/api";
import { DataTableFilterMeta } from "primereact/datatable";
import ContactModel from "../../models/contact.model";

class ManageMembersInfo {
	static getColumns(): ColumnField[] {
		return [
			{ field: "contact_id", header: "Contact ID" },
			{ field: "first_name", header: "First Name" },
			{ field: "uh_id", header: "UH ID" },
			{ field: "email", header: "Email" },
			{ field: "last_name", header: "Last Name" },
			{ field: "phone_number", header: "Phone Number" },
			{ field: "shirt_size_id", header: "Shirt Size" },
			{ field: "timestamp", header: "Timestamp" }
		];
	}

	static getDefaultColumns(): ColumnField[] {
		return [
			{ field: "first_name", header: "First Name" },
			{ field: "last_name", header: "Last Name" },
			{ field: "uh_id", header: "UH ID" },
			{ field: "email", header: "Email" },
			{ field: "phone_number", header: "Phone Number" },
			{ field: "shirt_size_id", header: "Shirt Size" }
		];
	}

	static getShirtSizeOptions() {
		return [
			{ label: "Not Available", value: undefined },
			{ label: "Extra Small", value: "xs" },
			{ label: "Small", value: "sm" },
			{ label: "Medium", value: "md" },
			{ label: "Large", value: "lg" },
			{ label: "Extra Large", value: "xl" },
			{ label: "Double Extra Large", value: "xxl" },
			{ label: "Triple Extra Large", value: "xxxl" }
		];
	}

	static getTableFilters(): DataTableFilterMeta {
		return {
			global: { value: null, matchMode: FilterMatchMode.CONTAINS },
			contact_id: { value: null, matchMode: FilterMatchMode.CONTAINS },
			timestamp: { value: null, matchMode: FilterMatchMode.CONTAINS },
			last_name: { value: null, matchMode: FilterMatchMode.CONTAINS },
			first_name: { value: null, matchMode: FilterMatchMode.CONTAINS },
			uh_id: { value: null, matchMode: FilterMatchMode.CONTAINS },
			email: { value: null, matchMode: FilterMatchMode.CONTAINS },
			phone_number: { value: null, matchMode: FilterMatchMode.CONTAINS },
			shirt_size_id: { value: null, matchMode: FilterMatchMode.CONTAINS }
		};
	}

	static getGlobalFilterFields(): string[] {
		return [
			"first_name",
			"last_name",
			"uh_id",
			"email",
			"phone_number",
			"shirt_size_id",
			"contact_id",
			"timestamp"
		];
	}
}

export default ManageMembersInfo;
