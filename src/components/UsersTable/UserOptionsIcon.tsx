import "./UserComponents.scss";
import { HiDotsVertical } from "react-icons/hi";

const UserOptionsIcon = (props: any) => {
  const invokeParentMethod = (e: any) => {
    props.context.componentParent.tableAction(props.data.id);
  };

  return (
    <div className="user-options-icon">
      <div onClick={invokeParentMethod}>
        <HiDotsVertical />
      </div>
    </div>
  );
};

export default UserOptionsIcon;
