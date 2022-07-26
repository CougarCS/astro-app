import ColumnField from "../../models/table.model";

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
            { field: "timestamp", header: "Timestamp" },
        ];
    }

    static getDefaultColumns(): ColumnField[] {
        return [
            { field: "first_name", header: "First Name" },
            { field: "last_name", header: "Last Name" },
            { field: "uh_id", header: "UH ID" },
            { field: "email", header: "Email" },
            { field: "phone_number", header: "Phone Number" },
            { field: "shirt_size_id", header: "Shirt Size" },
        ];
    }

}

export default ManageMembersInfo;