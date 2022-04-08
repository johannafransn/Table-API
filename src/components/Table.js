import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function Table({ interval, searchText }) {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [graphData, setGraphData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchGCD = async () => {
      //Use settimeout to create interval fetch
      //setTimeout(fetchGCD, interval * 1000);
      const liveUrl = "https://liquality.io/swap/agent/api/swap/marketinfo";
      console.log(liveUrl, "Live url");
      const res = await fetch(liveUrl);
      const data = await res.json();
      //Sets the raw groundData
      console.log(interval, "", data.length, "I REFETCHED!");
      setApiData(data);
    };
    fetchGCD();
  }, [count]);

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

  const onChangePage = (page) => {
    // update state with new page of items
    setCurrentPage(page);
  };

  //TODO: Add  pagination
  const _renderRows = () => {
    let filteredData = _searchObjectWithText(apiData);
    const indexOfLastPost = currentPage * rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - rowsPerPage;
    const currentItems = filteredData.slice(indexOfFirstPost, indexOfLastPost);
    console.log(
      currentItems,
      "<-- currentitems , --> currentpage",
      currentPage
    );

    let rows = [];
    if (filteredData && filteredData.length > 0) {
      rows = currentItems.map((item, index) => {
        return (
          <tr key={index}>
            <td style={{ textAlign: "left" }}>{index}</td>
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

  const _renderTablePage = () => {
    const indexOfLastPost = currentPage * rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - rowsPerPage;
    const currentItems = apiData.slice(indexOfFirstPost, indexOfLastPost);
  };
  console.log("wat is data??", interval);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Number</th>
            <th>From</th>
            <th style={{ textAlign: "right" }}>To</th>
            <th style={{ textAlign: "right" }}>Updated</th>
            <th style={{ textAlign: "right" }}>Rate</th>
          </tr>
        </thead>
        <tbody>
          {_renderTablePage()}
          {_renderRows()}
        </tbody>
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
