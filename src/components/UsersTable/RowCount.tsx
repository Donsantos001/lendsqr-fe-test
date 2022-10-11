import { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import useClickOutside from "../../hooks/useClickOutside";

type Props = {
  selectValue?: string | number | boolean;
  defaultSelectText?: string;
  optionList?: {
    value: number;
    text: string;
  }[];
  onChange?: (value: number) => void;
};

const RowCount = ({
  selectValue,
  defaultSelectText,
  optionList,
  onChange,
}: Props) => {
  const rowCountRef = useRef<any>();
  const currentValue = optionList?.find(
    (option) => option.value === selectValue
  )?.text;
  const [selectState, setSelectState] = useState({
    selectText: defaultSelectText || "",
    showOptionList: false,
    optionList: optionList || [],
  });

  useClickOutside(rowCountRef, () => {
    setSelectState((prevState) => ({ ...prevState, showOptionList: false }));
  });

  return (
    <div
      ref={rowCountRef}
      className={`row-count-con${selectState.showOptionList ? " show" : ""}`}
    >
      <div className="custom-select-container">
        <div
          className={
            selectState.showOptionList
              ? "selected-text active"
              : "selected-text"
          }
          onClick={() => {
            setSelectState({
              ...selectState,
              showOptionList: !selectState.showOptionList,
            });
          }}
        >
          {currentValue || selectState.selectText}

          <span className="angle-down">
            <FaAngleDown className="eas" />
          </span>
        </div>

        {selectState.showOptionList && (
          <div className="select-options-con">
            <ul className="select-options">
              {selectState.optionList.map((option, index) => {
                return (
                  <li
                    className="custom-select-option"
                    data-value={option.value}
                    key={index}
                    onClick={(e: any) => {
                      setSelectState({
                        ...selectState,
                        selectText: e.target.textContent,
                        showOptionList: false,
                      });
                      onChange && onChange(option.value);
                    }}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RowCount;
