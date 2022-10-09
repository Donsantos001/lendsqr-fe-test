import React, { useCallback, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import RowCount from "../UsersTable/RowCount";
import "./PaginationControls.scss";

type Props = {
  current: number;
  pages: number;
  rows: number;
  setPageSize: (size: number) => void;
  toPage: (size: number) => void;
  toNextPage: () => void;
  toPrevPage: () => void;
};

const PaginationControls = ({
  current,
  pages,
  rows,
  setPageSize,
  toPage,
  toNextPage,
  toPrevPage,
}: Props) => {
  const setUpControls = useCallback(() => {
    const pagesShown = [];
    if (pages <= 5) {
      for (let i = 1; i <= pages; i++) {
        pagesShown.push({ value: i, active: current === i });
      }
      return pagesShown;
    }

    let start = Math.max(current - 1, 2);
    let end = Math.min(current + 1, pages - 1);
    pagesShown.push({ value: 1, active: current === 1 });
    if (start > 2) pagesShown.push({ value: "...", active: false });
    for (let i = start; i <= end; i++) {
      pagesShown.push({ value: i, active: current === i });
    }
    if (end < pages - 1) pagesShown.push({ value: "...", active: false });
    pagesShown.push({ value: pages, active: current === pages });
    return pagesShown;
  }, [pages, current, rows]);

  return (
    <div className="pagination-controls-con">
      <div className="pagination-info">
        <div>
          Showing
          <span className="rows">
            <RowCount
              onChange={(size) => setPageSize(size)}
              defaultSelectText={rows + ""}
              selectValue={rows}
              optionList={[
                { text: "20", value: 20 },
                { text: "10", value: 10 },
                { text: "5", value: 5 },
                { text: "30", value: 30 },
                { text: "50", value: 50 },
                { text: "100", value: 100 },
              ]}
            />
          </span>
          out of 100
        </div>
      </div>

      <div className="pagination-controls">
        <div className="prev bg" onClick={() => toPrevPage()}>
          <FaAngleLeft />
        </div>

        {setUpControls().map((control, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                if (typeof control.value === "number")
                  toPage(control.value - 1);
              }}
              className={`page-control${control.active ? " active" : ""}`}
            >
              {control.value + ""}
            </div>
          );
        })}

        <div className="next bg" onClick={() => toNextPage()}>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;
