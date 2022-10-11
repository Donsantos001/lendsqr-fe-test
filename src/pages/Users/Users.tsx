import React from "react";
import UserCard from "../../components/Cards/UserCard";
import CiUsers from "../../components/CustomIcons/CiUsers";
import CiThreeUsers from "../../components/CustomIcons/CiThreeUsers";
import CiWithLoan from "../../components/CustomIcons/CiWithLoan";
import CiWithSavings from "../../components/CustomIcons/CiWithSavings";
import UsersTable from "../../components/UsersTable/UsersTable";
import "./Users.scss";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const openDetails = (id: number) => {
    navigate("/users/details", { state: { id } });
  };

  return (
    <div className="users-main">
      <h3>Users</h3>

      <section className="users-card-section">
        <UserCard icon={<CiUsers />} text="USERS" quantity={2453} />
        <UserCard icon={<CiThreeUsers />} text="ACTIVE USERS" quantity={2453} />
        <UserCard
          icon={<CiWithLoan />}
          text="USERS WITH LOANS"
          quantity={12453}
        />
        <UserCard
          icon={<CiWithSavings />}
          text="USERS WITH SAVINGS"
          quantity={102453}
        />
      </section>

      <section className="users-table-section">
        <UsersTable openDetails={openDetails} showFilter={true} />
      </section>
    </div>
  );
};

export default Users;
