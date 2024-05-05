import React, { useState } from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
  currentPage: number;
  pageSize: number;
  totalUsersCount: number;
  portionSize?: number;
  changePageHandler: (page: number) => void;
};

const Paginator = ({
  currentPage,
  pageSize,
  changePageHandler,
  totalUsersCount,
  portionSize = 20,
}: PaginatorPropsType) => {
  const pages: number[] = [];
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionsCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPageNumberOfPortion = (portionNumber - 1) * portionSize + 1;
  const rightPageNumberOfPortion = portionNumber * portionSize;

  return (
    <>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            changePageHandler(leftPageNumberOfPortion - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter((p) => {
          return p >= leftPageNumberOfPortion && p <= rightPageNumberOfPortion;
        })
        .map((p) => (
          <span
            onClick={() => changePageHandler(p)}
            className={`${s.pages} ${currentPage === p ? s.selectedPage : ""}`}
            key={p}
          >
            {p}
          </span>
        ))}
      {portionsCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            changePageHandler(leftPageNumberOfPortion + portionSize);
          }}
        >
          NEXT
        </button>
      )}
    </>
  );
};

export default Paginator;
