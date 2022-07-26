import {
	DataTable,
	DataTableFilterMeta,
	DataTableFilterMetaData
} from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect, MultiSelectChangeParams } from "primereact/multiselect";
import { ChangeEvent, useState } from "react";
import { ColumnField } from "../models/table.model";
import { InputText } from "primereact/inputtext";

interface Props<T> {
	rows: T[];
	columns: ColumnField[];
	defaultColumns?: ColumnField[];
	selected: T | undefined;
	setSelected: (value: React.SetStateAction<T | undefined>) => void;
	filters?: DataTableFilterMeta;
	globalFilterFields?: string[];
	height?: string;
}

const BasicTable = <T,>({
	rows,
	columns,
	defaultColumns = undefined,
	selected,
	setSelected,
	filters = undefined,
	globalFilterFields = undefined,
	height = undefined
}: Props<T>) => {
	const [selectedColumns, setSelectedColumns] = useState(
		defaultColumns ?? columns
	);

	const [globalFilter, setGlobalFilter] = useState(filters);
	const [globalFilterValue, setGlobalFilterValue] = useState("");

	const onColumnToggle = (event: MultiSelectChangeParams) => {
		const cols = event.value as ColumnField[];
		const updatedCols = columns.filter((col) =>
			cols.some((sCol) => sCol.field === col.field)
		);
		setSelectedColumns(updatedCols);
	};

	const onGlobalFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value;
		const updated = { ...globalFilter };
		(updated.global as DataTableFilterMetaData).value = value;
		setGlobalFilterValue(value);
		setGlobalFilter(updated);
	};

	const renderHeader = () => {
		if (!globalFilter)
			return (
				<div style={{ textAlign: "left" }}>
					<MultiSelect
						value={selectedColumns}
						options={columns}
						optionLabel="header"
						onChange={onColumnToggle}
						style={{ width: "20em" }}
					/>
				</div>
			);

		return (
			<div className="flex" style={{ justifyContent: "space-between" }}>
				<MultiSelect
					value={selectedColumns}
					options={columns}
					optionLabel="header"
					onChange={onColumnToggle}
					style={{ width: "300px" }}
				/>

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

	const renderColumns = () =>
		selectedColumns.map((col) => (
			<Column
				key={`col-${col.field}`}
				field={col.field}
				header={col.header}
				sortable
			/>
		));

	return (
		<>
			<DataTable
				value={rows}
				header={renderHeader()}
				filters={globalFilter}
				filterDisplay="menu"
				globalFilterFields={globalFilterFields}
				selection={selected}
				selectionMode="single"
				onSelectionChange={(e) => setSelected(e.value)}
				size="small"
				responsiveLayout="scroll"
				resizableColumns
				showGridlines
				scrollHeight={height ?? "500px"}
			>
				{renderColumns()}
			</DataTable>
		</>
	);
};

export default BasicTable;
