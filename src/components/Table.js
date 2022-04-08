import React, { useState, useEffect } from "react";

export default function Table({ interval }) {
  const [apiData, setApiData] = useState([]);
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

  //TODO: Add search and pagination
  const _renderRows = () => {
    let rows = [];
    if (apiData.length > 0) {
      rows = apiData.map((item, index) => {
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
  console.log("wat is data??", interval);

  return (
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
      <tbody>{_renderRows()}</tbody>
    </table>
  );
}
