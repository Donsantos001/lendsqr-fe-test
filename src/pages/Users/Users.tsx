import React, { useState } from "react";
import UserCard from "../../components/Cards/UserCard";
import CiUsers from "../../components/CustomIcons/CiUsers";
import CiThreeUsers from "../../components/CustomIcons/CiThreeUsers";
import UsersTable from "../../components/UsersTable/UsersTable";
import UserDetails from "../UserDetails/UserDetails";
import "./Users.scss";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const openDetails = (id: number) => {
    navigate("/user/details", { state: { id } });
  };

  return (
    <div className="users-main">
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
        <UsersTable openDetails={openDetails} />
      </section>
    </div>
  );
};

export default Users;
