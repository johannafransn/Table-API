import Table from "../components/Table";

const Home = () => {
  return (
    <div class="container">
      <div class="row my-3 my-sm-5">
        <div class="col-sm-3 mb-2">
          <h4>Interval Fetch</h4>
          <ul class="nav flex-column">
            <li class="nav-item py-2">
              <a id="ember34" class="ember-view" href="/artiklar/installation">
                Every 5 seconds
              </a>
            </li>
            <li class="nav-item py-2">
              <a
                id="ember35"
                class="ember-view"
                href="/artiklar/hamta-bokforingsdata"
              >
                Every 10 seconds
              </a>
            </li>
            <li class="nav-item py-2">
              <a
                id="ember36"
                class="ember-view"
                href="/artiklar/hamta-rapporter-fran-fortnox"
              >
                Every 15 seconds
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-9 article-content">
          <h1>Table API</h1>

          <div id="ember41" class="ember-view">
            <p>
              Choose an interval to fetch new table API data every 5, 10 or 15
              seconds.
            </p>
            <p>
              If you want to learn more about this application see:{" "}
              <a href="/about#/about">About</a>
            </p>
            <Table></Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
