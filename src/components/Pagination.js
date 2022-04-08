import React, { useState } from "react";

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  stylePosition,
}) {
  const [currentActivePageId, setCurrentActivePageId] = useState(1);

  {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    let styleDisableIfFirstPage =
      currentPage === 1
        ? {
            backgroundColor: "rgb(119 123 126 / 20%)",
            pointerEvents: "none",
            color: "#a06ffb",
          }
        : { color: "#a06ffb" };
    let styleDisableIfLastPage =
      currentPage === pageNumbers.length
        ? {
            backgroundColor: "rgb(119 123 126 / 20%)",
            pointerEvents: "none",
            color: "#a06ffb",
          }
        : { backgroundColor: "white", color: "#a06ffb" };

    if (totalItems > 0 && totalItems > itemsPerPage) {
      return (
        <nav style={stylePosition}>
          <ul className="pagination">
            <li className="">
              <a
                className="page-link"
                style={styleDisableIfFirstPage}
                onClick={() => paginate(1)}
              >
                First
              </a>
            </li>
            <li className="">
              <a
                className="page-link"
                style={styleDisableIfFirstPage}
                onClick={() => paginate(currentPage - 1)}
              >
                Previous
              </a>
            </li>

            {pageNumbers.map((number) => (
              <li
                key={number}
                className={
                  currentPage === number ? "page-item active" : "page-item"
                }
              >
                <a
                  onClick={() => paginate(number)}
                  className="page-link active"
                >
                  {number}
                </a>
              </li>
            ))}

            <li key="next" className="">
              <a
                className="page-link"
                style={styleDisableIfLastPage}
                onClick={() => paginate(currentPage + 1)}
              >
                Next
              </a>
            </li>
            <li className="">
              <a
                className="page-link"
                style={styleDisableIfLastPage}
                onClick={() => paginate(pageNumbers.length)}
              >
                Last
              </a>
            </li>
          </ul>
        </nav>
      );
    } else return <div></div>;
  }
}
