import "./UserComponents.scss";

const UserStatus = ({ status }: { status: any }) => {
  return (
    <div className="user-status-tag">
      <div className={status.color}>
        <span>{status.text}</span>
      </div>
    </div>
  );
};

export default UserStatus;
