import React, { useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-enterprise";
import { LicenseManager } from "ag-grid-enterprise";
import "./Table.scss";
import { ColDef, ColGroupDef, GridOptions } from "ag-grid-community";

//@ts-ignore
LicenseManager.prototype.outputMissingLicenseKey = () => {};

type Props = {
  gridRef?: any;
  rowData?: any[] | null;
  columnDefs: (ColDef | ColGroupDef)[] | null;
  height?: string | number;
  width?: string | number;
};

const Table = ({
  gridRef,
  ...props
}: Omit<GridOptions, "rowData" | "columnDefs"> & Props) => {
  const defaultColDefs = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <div
      className="ag-theme-material"
      style={{
        height: props.height || "100%",
        width: props.width || "100%",
      }}
    >
      <AgGridReact
        {...props}
        ref={gridRef}
        headerHeight={60}
        rowHeight={61}
        pagination={props.pagination}
        paginationPageSize={props.paginationPageSize}
        onPaginationChanged={props.onPaginationChanged}
        suppressPaginationPanel={true}
        defaultColDef={
          props.defaultColDef
            ? { ...defaultColDefs, ...props.defaultColDef }
            : defaultColDefs
        }
        gridOptions={{
          icons: {
            menu: "<div class='ag-icon ag-icon-filter'></div>",
          },
        }}
        animateRows={props.animateRows || true}
        onCellClicked={(params: any) => {
          props.onCellClicked && props.onCellClicked(params);
        }}
        context={{ componentParent: props.context }}
      ></AgGridReact>
    </div>
  );
};
export default Table;
