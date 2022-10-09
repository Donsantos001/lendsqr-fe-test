import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbUserX, TbUserCheck } from "react-icons/tb";

type Props = {
  id?: string | number;
  open?: boolean;
};

const OptionsBox = ({ id, open = true }: Props) => {
  return (
    <div className="user-options-con">
      <div>
        <MdOutlineRemoveRedEye />
        <span>View Details</span>
      </div>

      <div>
        <TbUserX />
        <span>Blacklist User</span>
      </div>

      <div>
        <TbUserCheck />
        <span>Activate User</span>
      </div>
    </div>
  );
};

export default OptionsBox;
