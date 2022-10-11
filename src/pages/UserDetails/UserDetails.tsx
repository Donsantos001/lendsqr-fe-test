import React, { useEffect, useState } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { AiOutlineStar, AiFillStar, AiOutlineUser } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { addUserDetails } from "../../redux/slice";
import UserInfo from "../../components/UsersInfo/UsersInfo";
import AppSuspenseSpinner from "../../components/Loader/AppSuspenseSpinner";
import "./UserDetails.scss";
import { useQuery } from "react-query";
import useAppSelector from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import Spinner from "../../components/Loader/Spinner";

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [tab, setTab] = useState("general");
  const [recent, setRecent] = useState(false);
  const { userDetails } = useAppSelector(({ user }) => user);
  const detail = userDetails?.find((item) => item.id === state?.id);

  const { refetch, isFetching } = useQuery(`users/${state?.id}`, {
    refetchOnWindowFocus: false,
    enabled: false,
    onSuccess: (data) => {
      setRecent(true);
      dispatch(addUserDetails({ id: state?.id, data: data }));
    },
  });

  useEffect(() => {
    if (!userDetails || !state?.id) return;
    if (!userDetails.some((item) => item.id === state?.id)) {
      refetch();
    }
  }, [userDetails]);

  useEffect(() => {
    if (userDetails && !recent) {
      refetch();
    }
  }, [recent, userDetails]);

  return !state?.id ? (
    <div className="unavailable">
      <h3>Data not available, try selecting a user</h3>
    </div>
  ) : detail ? (
    <section className="user-details-section">
      {isFetching && (
        <div className="refetching">
          <span>updating..</span>
          <Spinner />
        </div>
      )}

      <div className="user-details-main">
        <div className="back-to-users" onClick={() => navigate("/users")}>
          <CgArrowLongLeft />
          <span>Back to Users</span>
        </div>

        <div className="user-details-head">
          <h3>Users Details</h3>

          <div className="user-details-status-option">
            <div className="blacklist-user status-option">
              <span>BLACKLIST USER</span>
            </div>

            <div className="activate-user status-option">
              <span>ACTIVATE USER</span>
            </div>
          </div>
        </div>

        <div className="user-details-overview">
          <div className="content">
            <div className="content-profile-id">
              <div className="profile-icon">
                <AiOutlineUser />
              </div>

              <div className="text">
                <h3>
                  {detail?.profile?.lastName} {detail?.profile?.firstName}
                </h3>
                <span>{detail?.userName}</span>
              </div>
            </div>

            <div className="vr"></div>

            <div className="user-tier">
              <p>User's Tier</p>
              <span>
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
            </div>

            <div className="vr"></div>

            <div className="bank-info">
              <h3>
                {detail?.profile?.currency} {detail?.accountBalance}
              </h3>
              <span>{detail?.accountNumber}/Providus Bank</span>
            </div>
          </div>

          <div className="navigation">
            <div
              className={`navigation-item${tab === "general" ? " active" : ""}`}
              onClick={() => setTab("general")}
            >
              <span>General Details</span>
            </div>

            <div
              className={`navigation-item${
                tab === "documents" ? " active" : ""
              }`}
              onClick={() => setTab("documents")}
            >
              <span>Documents</span>
            </div>

            <div
              className={`navigation-item${tab === "bank" ? " active" : ""}`}
              onClick={() => setTab("bank")}
            >
              <span>Bank Details</span>
            </div>

            <div
              className={`navigation-item${tab === "loans" ? " active" : ""}`}
              onClick={() => setTab("loans")}
            >
              <span>Loans</span>
            </div>

            <div
              className={`navigation-item${tab === "savings" ? " active" : ""}`}
              onClick={() => setTab("savings")}
            >
              <span>Savings</span>
            </div>

            <div
              className={`navigation-item${tab === "system" ? " active" : ""}`}
              onClick={() => setTab("system")}
            >
              <span>App and System</span>
            </div>
          </div>
        </div>

        {tab === "general" && <UserInfo detail={detail} />}
        {tab === "documents" && (
          <div className="unavailable">
            <h3>Documents unavailable</h3>
          </div>
        )}
        {tab === "bank" && (
          <div className="unavailable">
            <h3>Bank unavailable</h3>
          </div>
        )}
        {tab === "loans" && (
          <div className="unavailable">
            <h3>Loans unavailable</h3>
          </div>
        )}
        {tab === "savings" && (
          <div className="unavailable">
            <h3>Savings unavailable</h3>
          </div>
        )}
        {tab === "system" && (
          <div className="unavailable">
            <h3>System unavailable</h3>
          </div>
        )}
      </div>
    </section>
  ) : (
    <AppSuspenseSpinner />
  );
};

export default UserDetails;
