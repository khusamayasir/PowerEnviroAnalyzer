import React, {
  useState,
} from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
// @ts-ignore
import Login from "./components/MainPages/Login";
// @ts-ignore
import Sidebar from "./components/Sidebar/sidebar";
// @ts-ignore
import Dashboard from "./components/MainPages/Dashboard";
// @ts-ignore
import Reports from "./components/MainPages/Reports";
// @ts-ignore
import LoadOne from "./components/MainPages/LoadOne";
// @ts-ignore
import LoadTwo from "./components/MainPages/LoadTwo";
// @ts-ignore
import LoadThree from "./components/MainPages/LoadThree";
import "./App.css";
import "./styleSheets/Style.css";
import { Col } from "react-bootstrap";

function App() {
  const headerExcludingScreens = ["/"];
  const [path, setPath] = useState(window.location.pathname);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  // useEffect(() =>
  //   { setPath(window.location.pathname)},
  // [window.location.pathname])
  // const location = useLocation()
  // console.log(location)

  function setWidthForSideColumn(bool: boolean) {
    setIsMenuOpened(bool);
    console.log(bool);
  }
  return (
    <div>
      <BrowserRouter>
      <div
          className="d-flex position-relative"
          style={{ height: "100vh", width: "100vw", overflowX: "hidden" }}
        >
          {/* {path != `/` && ( */}
          {!headerExcludingScreens.includes(window.location.pathname) && (
            <div
              id="sideMenu"
              style={{ position: "sticky", top: "0px" }}
              className={`px-0  ${
                isMenuOpened ? "sideMenuOpen" : "sideMenuClose"
              }`}
            >
              <Sidebar handleCallBack={setWidthForSideColumn} />
            </div>
          )}
          <div
            className={`px-2 DMSans-family ${
              isMenuOpened ? "mainMenuClose" : "mainMenuOpen"
            } ${
              headerExcludingScreens.includes(window.location.pathname) &&
              "w-100"
            } `}
            // md={
            //   !headerExcludingScreens.includes(window.location.pathname)
            //     ? 10
            //     : 12
            // }
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Report" element={<Reports />} />
              <Route path="/LoadOne" element={<LoadOne />} />
              <Route path="/LoadTwo" element={<LoadTwo />} />
              <Route path="/LoadThree" element={<LoadThree />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;