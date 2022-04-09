import { useState } from "react";
import SidePanel from "../components/SidePanel";
import Table from "../components/Table";

export default function Home({ propsHere }) {
  const [interval, setInterval] = useState(10);
  const [radioBtnSelected, setRadioBtnSelected] = useState("10");
  const [searchText, setSearchText] = useState("");

  const _handleCheckboxChange = (event) => {
    setRadioBtnSelected(event.target.value);
    setInterval(Number(event.target.value));
  };

  const _handleSearchText = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="container">
      <div className="row my-3 my-sm-5">
        <SidePanel
          _handleCheckboxChange={_handleCheckboxChange}
          radioBtnSelected={radioBtnSelected}
          _handleSearchText={_handleSearchText}
        ></SidePanel>
        <div className="col-sm-9 article-content">
          <h1>Table API</h1>

          <div id="ember41" className="ember-view">
            <p>
              Choose an interval to fetch new table API data every 5, 10 or 15
              seconds.
            </p>
            <p>
              If you want to learn more about this application see:{" "}
              <a href="/#/about">About</a>
            </p>

            <Table interval={interval} searchText={searchText}></Table>
          </div>
        </div>
      </div>
    </div>
  );
}
