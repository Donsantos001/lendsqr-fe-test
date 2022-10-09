import React from "react";
import UserCard from "../../components/Cards/UserCard";
import CiUsers from "../../components/CustomIcons/CiUsers";
import CiThreeUsers from "../../components/CustomIcons/CiThreeUsers";
import "./Users.scss";
import UsersTable from "../../components/UsersTable/UsersTable";

const Users = () => {
  return (
    <div>
      <h3>Users</h3>

      <section className="users-card-section">
        <UserCard icon={<CiUsers />} text="USERS" quantity={2453} />
        <UserCard icon={<CiThreeUsers />} text="ACTIVE USERS" quantity={2453} />
        <UserCard icon={<CiUsers />} text="USERS WITH LOANS" quantity={12453} />
        <UserCard
          icon={<CiUsers />}
          text="USERS WITH SAVINGS"
          quantity={102453}
        />
      </section>

      <section className="users-table-section">
        <UsersTable />
      </section>
    </div>
  );
};

export default Users;
