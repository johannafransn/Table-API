import React, { useState, useEffect, useRef } from "react";
import Pagination from "./Pagination";

//Custom hook to create interval that is clearable
function useInterval(callback, interval) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (interval !== null) {
      let id = setInterval(tick, interval * 1000);
      return () => clearInterval(id);
    }
  }, [interval]);
}

export default function Table({ interval, searchText }) {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(35);
  const [count, setCount] = useState(1);
  const [isRunning, setIsRunning] = useState(true);

  const fetchApiData = async () => {
    //You could also use setTimeout to create interval fetch (has drawbacks)
    //setTimeout(fetchGCD, interval * 1000);
    const liveUrl = "https://liquality.io/swap/agent/api/swap/marketinfo";
    const res = await fetch(liveUrl);
    const data = await res.json();
    //Sets the raw groundData
    console.log("Interval chosen:", interval, "REFETCH!", data.length);
    setApiData(data);
  };

  //Fetch on mounting component
  useEffect(() => {
    fetchApiData();
  }, []);

  //Fetch continously during the interval set
  useInterval(
    () => {
      fetchApiData();
      setCount(count + 1);
    },
    isRunning ? interval : null
  );

  //This function filters the object based on user input text
  const _searchObjectWithText = (obj) => {
    let lowercasedFilter = searchText.toLowerCase();
    if (obj) {
      var filteredData = obj.filter((item) => {
        let result = Object.keys(item).some((key) => {
          if (item[key]) {
            return item[key]
              .toString()
              .toLowerCase()
              .includes(lowercasedFilter);
          }
        });
        return result;
      });
    }
    return filteredData;
  };

  // Update state with new page of items
  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const _renderRows = () => {
    let filteredData = _searchObjectWithText(apiData);
    const indexOfLastPost = currentPage * rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - rowsPerPage;
    const currentItems = filteredData.slice(indexOfFirstPost, indexOfLastPost);

    //If user searches, we need to iterate the full array with filtered data
    //If no search just iterate and display the current page result
    let arrayToIterate;
    if (searchText.length > 0) {
      arrayToIterate = filteredData;
    } else arrayToIterate = currentItems;

    let rows = [];
    if (filteredData && filteredData.length > 0) {
      rows = arrayToIterate.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.from}</td>
            <td style={{ textAlign: "right" }}>{item.to}</td>
            <td style={{ textAlign: "right" }}>{item.updatedAt}</td>
            <td style={{ textAlign: "right" }}>{item.rate}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="3">No data available</td>
        </tr>
      );
    }

    return rows;
  };

  return (
    <div>
      {apiData.length > 0 ? (
        <div className="mb-4">
          <strong>Fetch success!</strong> You have done{" "}
          <strong className="alert-link purple">{count}</strong> fetch(es) to
          the API so far.{" "}
        </div>
      ) : (
        <div className="mb-4">
          <strong>Fetch failure!</strong> Could not fetch any data from API
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>From</th>
            <th style={{ textAlign: "right" }}>To</th>
            <th style={{ textAlign: "right" }}>Updated</th>
            <th style={{ textAlign: "right" }}>Rate</th>
          </tr>
        </thead>
        <tbody>{_renderRows()}</tbody>
      </table>
      <Pagination
        itemsPerPage={rowsPerPage}
        totalItems={apiData.length}
        currentPage={currentPage}
        paginate={onChangePage}
        stylePosition={{
          position: "relative",
          top: 20,
          float: "right",
        }}
      />
    </div>
  );
}
