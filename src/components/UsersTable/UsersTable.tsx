import React, { useState, useRef, useCallback } from "react";
import { useQuery } from "react-query";
import Table from "../Table/Table";
import "./UsersTable.scss";
import UserStatus from "./UserStatus";
import UserOptionsIcon from "./UserOptionsIcon";
import { formatDate } from "../../utils/formatter";
import UserOptions from "./OptionsBox";
import PaginationControls from "../Pagination/PaginationControls";

const UsersTable = () => {
  const gridRef = useRef<any>();
  const [openOptions, setOpenOptions] = useState(false);
  const [clickedId, setClickedId] = useState(0);
  const { data } = useQuery<any>("users", { refetchOnWindowFocus: false });
  const columnDefs = [
    {
      field: "orgName",
      headerName: "ORGANIZATION",
    },
    { field: "userName", headerName: "USERNAME" },
    { field: "email", headerName: "EMAIL" },
    { field: "phoneNumber", headerName: "PHONE NUMBER" },
    {
      field: "createdAt",
      headerName: "DATE JOINED",
      valueFormatter: ({ value }: { value: string }) => {
        return formatDate(value);
      },
    },
    {
      field: "STATUS",
      cellRenderer: UserStatus,
      width: 150,
    },
    {
      cellRenderer: UserOptionsIcon,
      width: 30,
    },
  ];
  const paginationInfo = () => {
    if (gridRef.current && gridRef.current?.api) {
      return {
        pages: gridRef.current.api.paginationGetTotalPages(),
        current: gridRef.current.api.paginationGetCurrentPage() + 1,
        rows: gridRef.current.api.paginationGetPageSize(),
      };
    }
    return {
      pages: 1,
      current: 1,
      rows: 0,
    };
  };
  const [controlInfo, setControlInfo] = useState(paginationInfo());

  const onPaginationChanged = () => {
    if (gridRef.current) {
      //avoid unneccessary callbacks
      const info = paginationInfo();
      if (JSON.stringify(info) === JSON.stringify(controlInfo)) return;
      setControlInfo(info);
    }
  };

  const setPageSize = (param: number) => {
    gridRef.current.api.paginationSetPageSize(param);
  };
  const toNextPage = () => {
    gridRef.current.api.paginationGoToNextPage();
  };
  const toPrevPage = () => {
    gridRef.current.api.paginationGoToPreviousPage();
  };
  const toPage = (param: number) => {
    gridRef.current.api.paginationGoToPage(param);
  };

  return (
    <div className="users-table">
      <Table
        gridRef={gridRef}
        rowData={data}
        columnDefs={columnDefs}
        context={{
          tableAction: (data: any) => {
            setClickedId(data);
            setOpenOptions(true);
          },
        }}
        pagination={true}
        paginationPageSize={20}
        onPaginationChanged={onPaginationChanged}
      />
      {clickedId !== 0 && openOptions && (
        <UserOptions
          onClickOutside={() => {
            setOpenOptions(false);
            setClickedId(0);
          }}
        />
      )}

      {gridRef.current && (
        <PaginationControls
          {...controlInfo}
          setPageSize={setPageSize}
          toNextPage={toNextPage}
          toPrevPage={toPrevPage}
          toPage={toPage}
        />
      )}
    </div>
  );
};

export default UsersTable;
