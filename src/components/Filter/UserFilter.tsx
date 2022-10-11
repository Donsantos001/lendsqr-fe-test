import React from "react";
import { statusList } from "../../utils/status";
import "./UserFilter.scss";

type FilterProps = {
  orgName: string;
  userName: string;
  email: string;
  lastActiveDate: string;
  phoneNumber: string;
  status: string;
};

interface Props {
  onFilter: () => void;
  onReset: () => void;
  filterDetails: FilterProps;
  changeFilterDetails: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  organizationList: any[];
}

const UserFilter = ({
  onFilter,
  onReset,
  filterDetails,
  changeFilterDetails,
  organizationList,
}: Props) => {
  return (
    <div className="user-filter-con">
      <div className="user-filter">
        <label htmlFor="organization">Organization</label>
        <div className="filter-input">
          <select
            name="orgName"
            id="organization"
            placeholder="select"
            value={filterDetails.orgName}
            onChange={changeFilterDetails}
          >
            <option value="">Select</option>
            {organizationList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <label htmlFor="username">Username</label>
        <div className="filter-input">
          <input
            type="text"
            name="userName"
            id="username"
            placeholder="User"
            value={filterDetails.userName}
            onChange={changeFilterDetails}
          />
        </div>

        <label htmlFor="email">Email</label>
        <div className="filter-input">
          <input
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            value={filterDetails.email}
            onChange={changeFilterDetails}
          />
        </div>

        <label htmlFor="Date">Date</label>
        <div className="filter-input">
          <input
            type="date"
            placeholder="Date"
            name="lastActiveDate"
            id="date"
            value={filterDetails.lastActiveDate}
            onChange={changeFilterDetails}
          />
        </div>

        <label htmlFor="phoneNumber">Phone Number</label>
        <div className="filter-input">
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            id="phoneNumber"
            value={filterDetails.phoneNumber}
            onChange={changeFilterDetails}
          />
        </div>

        <label htmlFor="status">Status</label>
        <div className="filter-input">
          <select
            name="status"
            id="status"
            placeholder="Select"
            value={filterDetails.status}
            onChange={changeFilterDetails}
          >
            <option value="">Select</option>
            {statusList.map((item, index) => {
              return (
                <option key={index} value={item.text}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>

        <div className="filter-buttons-con">
          <div className="reset" onClick={onReset}>
            <span>Reset</span>
          </div>
          <div className="filter" onClick={onFilter}>
            <span>Filter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFilter;
