import React, {
  useEffect,
  useState,
  useContext,
  ReactNode,
  Suspense,
  lazy,
} from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
const newLocal = "./components/MainPages/Login";
const Login = lazy(() => import(newLocal));
const newLocal_1 = "./components/MainPages/Dashboard";
const Dashboard = lazy(() => import(newLocal_1));
const newLocal_2 = "./components/Sidebar/sidebar";
const Sidebar = lazy(() => import(newLocal_2));
const newLocal_3 = "./components/MainPages/Reports";
const Report = lazy(() => import(newLocal_3));
const newLocal_4 = "./components/MainPages/LoadOne";
const LoadOne = lazy(() => import(newLocal_4));
const newLocal_5 = "./components/MainPages/LoadTwo";
const LoadTwo = lazy(() => import(newLocal_5));
const newLocal_6 = "./components/MainPages/LoadThree";
const LoadThree = lazy(() => import(newLocal_6));
import "./App.css";
import "./styleSheets/Style.css";
import { Col } from "react-bootstrap";
function App() {
  const headerExcludingScreens = ["/"];
  const [path, setPath] = useState(window.location.pathname);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const routes: { path: string; element: ReactNode }[] = [
    { path: "/", element: <Login /> },
    { path: "/Dashboard", element: <Dashboard /> },
    { path: "/Report", element: <Report /> },
    { path: "/LoadOne", element: <LoadOne /> },
    { path: "/LoadTwo", element: <LoadTwo /> },
    { path: "/LoadThree", element: <LoadThree /> },

  ];
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
        <div className="d-flex" style={{ height: "100vh", width: "100vw" }}>
          {/* {path != `/` && ( */}
          <div className={`px-0 ${isMenuOpened ? "w-20" : "w-10"}`}>
            {!headerExcludingScreens.includes(window.location.pathname) && (
              <Sidebar handleCallBack={setWidthForSideColumn} />
            )}
          </div>
          <div
            className={`px-2 DMSans-family ${isMenuOpened ? "w-80" : "w-90"} `}
            // md={
            //   !headerExcludingScreens.includes(window.location.pathname)
            //     ? 10
            //     : 12
            // }
          >
            <Suspense fallback={<p>Loading..</p>}>
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
