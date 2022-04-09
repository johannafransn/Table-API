import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg sticky-top navbar-light bg-white border-bottom shadow-sm ">
        <div className="container" style={{ color: "black" }}>
          <a className="navbar-brand" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="#a06ffb"
              className="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fillRule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>{" "}
            Table API{" "}
          </a>
          <div className="navbar-collapse collapse show" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link large
"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link large
"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <div></div>
              <div> </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
