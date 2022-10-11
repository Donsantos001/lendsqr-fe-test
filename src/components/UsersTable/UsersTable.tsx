import React, { useState, useRef, useCallback } from "react";
import { useQuery } from "react-query";
import Table from "../Table/Table";
import "./UsersTable.scss";
import UserStatus from "./UserStatus";
import UserOptionsIcon from "./UserOptionsIcon";
import { formatDate } from "../../utils/formatter";
import UserOptions from "./OptionsBox";
import PaginationControls from "../Pagination/PaginationControls";
import { randomStatus } from "../../utils/status";
import UserFilter from "../Filter/UserFilter";

const filterInitState = {
  orgName: "",
  userName: "",
  email: "",
  lastActiveDate: "",
  phoneNumber: "",
  status: "",
};

const UsersTable = ({
  openDetails,
  showFilter,
}: {
  openDetails: (id: number) => void;
  showFilter?: boolean;
}) => {
  const gridRef = useRef<any>();
  const [openOptions, setOpenOptions] = useState(false);
  const [clickedId, setClickedId] = useState(0);
  const [filterDetails, setFilterDetails] = useState(filterInitState);
  const { data: userData } = useQuery<any>("users", {
    onSuccess: (res) => {
      setData(res);
    },
    refetchOnWindowFocus: false,
  });
  const [data, setData] = useState<any>();
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
      field: "status",
      headerName: "STATUS",
      cellRenderer: ({ data }: any) => {
        return <UserStatus status={data.status} />;
      },
      width: 150,
    },
    {
      cellRenderer: UserOptionsIcon,
      width: 30,
    },
  ];

  const changeFilterDetails = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterDetails({ ...filterDetails, [e.target.name]: e.target.value });
  };

  const getOrganzationList = useCallback(() => {
    if (!userData) return [];
    return Array.from(new Set(userData.map((item: any) => item.orgName)));
  }, [userData]);

  const getFilteredData = useCallback(() => {
    if (Object.values(filterDetails).every((item) => item === "")) {
      return userData;
    }
    let found = [];
    let filterData: any = { ...filterDetails };
    delete filterData.status;

    for (const item of userData) {
      let valid = true;
      for (const fl of Object.keys(filterData)) {
        if (!fl) continue;
        if (!(item[fl] as string).includes(filterData[fl] as string)) {
          valid = false;
          break;
        }
      }
      if (valid) found.push(item);
    }
    return found;
  }, [userData, filterDetails]);

  const onReset = () => {
    setFilterDetails(filterInitState);
    setData(userData);
  };

  const onFilter = () => {
    setData(getFilteredData());
  };

  // This just populates a random status for design purpose
  const getWithStatus = useCallback(() => {
    return data?.map((item: any) => {
      item.status = randomStatus();
      return item;
    });
  }, [data]);

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
    <React.Fragment>
      <div className="users-table">
        <Table
          gridRef={gridRef}
          rowData={getWithStatus()}
          columnDefs={columnDefs}
          context={{
            tableAction: (data: any) => {
              setClickedId(data);
              setOpenOptions(true);
            },
          }}
          pagination={true}
          paginationPageSize={9}
          onPaginationChanged={onPaginationChanged}
        />

        {clickedId !== 0 && openOptions && (
          <UserOptions
            onClickOutside={() => {
              setOpenOptions(false);
              setClickedId(0);
            }}
            openDetails={() => {
              openDetails(clickedId);
            }}
          />
        )}

        {showFilter && (
          <UserFilter
            onFilter={onFilter}
            onReset={onReset}
            organizationList={getOrganzationList()}
            filterDetails={filterDetails}
            changeFilterDetails={changeFilterDetails}
          />
        )}
      </div>

      {gridRef.current && (
        <PaginationControls
          {...controlInfo}
          setPageSize={setPageSize}
          toNextPage={toNextPage}
          toPrevPage={toPrevPage}
          toPage={toPage}
        />
      )}
    </React.Fragment>
  );
};

export default UsersTable;
