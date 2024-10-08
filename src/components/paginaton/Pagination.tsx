import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type paginatonProps = {
  value: number;
  onChangePage: (number: number) => void;
};

const Pagination: React.FC<paginatonProps> = ({ value, onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={value - 1}
      />
    </>
  );
};

export default Pagination;
