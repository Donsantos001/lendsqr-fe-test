import React, { useRef } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbUserX, TbUserCheck } from "react-icons/tb";
import useClickOutside from "../../hooks/useClickOutside";

const OptionsBox = ({ onClickOutside }: { onClickOutside: () => void }) => {
  const optionRef = useRef<any>(null);
  useClickOutside(optionRef, onClickOutside);

  return (
    <div className="user-options-con" ref={optionRef}>
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
