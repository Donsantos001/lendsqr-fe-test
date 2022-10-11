import React, { useState, useCallback } from "react";
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

let gridApi: any;
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
    if (!userData) return userData;
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
        if (
          !(item[fl] as string)
            .toLowerCase()
            .includes((filterData[fl] as string).toLowerCase())
        ) {
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
    onPaginationChanged();
  };

  const onFilter = () => {
    setData(getFilteredData());
    onPaginationChanged();
  };

  // This just populates a random status for design purpose
  const getWithStatus = useCallback(() => {
    return data?.map((item: any) => {
      item.status = randomStatus();
      return item;
    });
  }, [data]);

  const paginationInfo = () => {
    if (gridApi) {
      return {
        pages: gridApi.paginationGetTotalPages(),
        current: gridApi.paginationGetCurrentPage() + 1,
        rows: gridApi.paginationGetPageSize(),
      };
    }
    return {
      pages: 1,
      current: 1,
      rows: 0,
    };
  };

  const [controlInfo, setControlInfo] = useState({
    pages: 1,
    current: 1,
    rows: 0,
  });

  const onPaginationChanged = () => {
    setControlInfo(paginationInfo());
  };

  const setPageSize = (param: number) => {
    gridApi.paginationSetPageSize(param);
    onPaginationChanged();
  };
  const toNextPage = () => {
    gridApi.paginationGoToNextPage();
    onPaginationChanged();
  };
  const toPrevPage = () => {
    gridApi.paginationGoToPreviousPage();
    onPaginationChanged();
  };
  const toPage = (param: number) => {
    gridApi.paginationGoToPage(param);
    onPaginationChanged();
  };

  return (
    <React.Fragment>
      <div className="users-table">
        <Table
          rowData={getWithStatus()}
          columnDefs={columnDefs}
          context={{
            tableAction: (data: any) => {
              setClickedId(data);
              setOpenOptions(true);
            },
          }}
          gridApi={(api: any) => (gridApi = api)}
          onGridReady={() => {
            setControlInfo(paginationInfo());
          }}
          pagination={true}
          paginationPageSize={10}
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

      {gridApi && (
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
