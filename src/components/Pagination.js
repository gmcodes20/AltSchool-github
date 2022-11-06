import React from "react";

function Pagination({ totalPageCount, updatePage, prev, next, currentPage }) {
  const btn = [];
  for (let i = 1; i <= totalPageCount; i++) {
    btn.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm justify-content-center flex-wrap">
        <li className="page-item">
          {" "}
          <button
            disabled={currentPage <= 1}
            onClick={prev}
            className="page-link"
          >
            Prev
          </button>
        </li>
        {btn?.map((page, index) => {
          return (
            <li key={index} className="page-item">
              {" "}
              <button onClick={updatePage} className="page-link">
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          {" "}
          <button onClick={next} className="page-link">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
