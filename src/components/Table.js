import React, { useState, useEffect } from "react";

export default function Table({ propsHere }) {
  const [apiData, setApiData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    const fetchGCD = async () => {
      const liveUrl = "https://liquality.io/swap/agent/api/swap/marketinfo";
      console.log(liveUrl, "Live url");
      const res = await fetch(liveUrl);
      const data = await res.json();
      //Sets the raw groundData
      console.log(data, "wat is data??");
      setApiData(data);
    };
    fetchGCD();
  }, []);

  /*   <tr key={index}>
  <td style={{ textAlign: "left" }}>1</td>
  <td>{item.from}</td>
  <td style={{ textAlign: "right" }}>85</td>
  <td style={{ textAlign: "right" }}>15</td>
  <td style={{ textAlign: "right" }}>true</td>
</tr>

 */
  const _renderRows = () => {
    let rows = [];
    if (apiData.length > 0) {
      rows = apiData.map((item, index) => {
        return (
          <tr key={index}>
            <td style={{ textAlign: "left" }}>{index}</td>
            <td>{item.from}</td>
            <td style={{ textAlign: "right" }}>85</td>
            <td style={{ textAlign: "right" }}>15</td>
            <td style={{ textAlign: "right" }}>true</td>
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
    <table class="table">
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>Number</th>
          <th>Description</th>
          <th style={{ textAlign: "right" }}>PurchasePrice</th>
          <th style={{ textAlign: "right" }}>QuantityInStock</th>
          <th style={{ textAlign: "right" }}>WebshopArticle</th>
        </tr>
      </thead>
      <tbody>{_renderRows()}</tbody>
    </table>
  );
}
