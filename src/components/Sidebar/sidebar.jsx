import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import image from "../../assets/power-enviro-analyzer-logo.jpeg";

const Sidebar = ({ handleCallBack }) => {
  const [isNotActive, setNotActive] = useState(true);
  const barsIcon = <i className="fas fa-bars"></i>;
  const crossIcon = <i className="fas fa-times-circle"></i>;

  const handleLogout = () => {
    // Perform logout functionality here
    // For example, clearing session, redirecting to login page, etc.
    window.location.href = "/"; // Reload the page
  };

  useEffect(() => {
    handleCallBack(!isNotActive);
  }, [isNotActive]);

  return (
    <div>
      <div id="sideMenu" className={`h-100 wrapper inter-family`}>
        <nav id="sidebar" className={isNotActive ? "active" : ""}>
          <button
            type="button"
            id="sidebarCollapse"
            onClick={() => setNotActive(!isNotActive)}
            className="btn btn-custom"
          >
            <span className={isNotActive ? "" : "hidden"}>{barsIcon}</span>
            <span className={isNotActive ? "hidden" : ""}>{crossIcon}</span>
          </button>
          <div className="sidebar-header">
            <img
              src={image}
              className="rounded-circle usr-image"
              height={isNotActive ? "20" : "70"}
              width={isNotActive ? "20" : "70"}
              alt="user"
            ></img>
            <h5 className="websiteName text-uppercase text-wrap">Power Enviro Analyzer</h5>
          </div>

          <ul className="list-unstyled components">
            <li className="list-item">
              <i className="fas fa-th-large icon-color"></i>
              <Link to="/Dashboard">
                <small className="text-uppercase">Dashboard</small>
              </Link>
            </li>
            <li className="list-item">
              <i className="fas fa-pedestal icon-color"></i>
              <Link to="/LoadOne">
                <small className="text-uppercase">Load 1</small>
              </Link>
            </li>
            <li className="list-item">
              <i className="fas fa-th-large icon-color"></i>
              <Link to="/LoadTwo">
                <small className="text-uppercase">Load 2</small>
              </Link>
            </li>
            <li className="list-item">
              <i className="fas fa-th-large icon-color"></i>
              <Link to="/LoadThree">
                <small className="text-uppercase">Load 3</small>
              </Link>
            </li>
            <li className="list-item">
              <i className="fas fa-file-alt icon-color"></i>
              <Link to="/Report">
                <small className="text-uppercase">Reports</small>
              </Link>
            </li>
            <li className="list-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt icon-color"></i>
              <Link to="/">
                <small className="text-uppercase">Logout</small>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
