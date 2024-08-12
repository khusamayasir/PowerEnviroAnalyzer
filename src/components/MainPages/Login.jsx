import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/power-enviro-analyzer-logo.jpeg";
import cancel from "../../assets/cancel.svg";
import eye from "../../assets/eye-show.svg";
import eyeSlash from "../../assets/eye-hide.svg";

const Login = (props) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeOf, setType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const loginBtn = useRef();
  const navigate = useNavigate();

  const credentials = [
    { email: "manazirjafri2000@gmail.com", password: "Admin@123" }
  ];

  const handleChangeType = () => {
    setType(typeOf === "password" ? "text" : "password");
  };

  const handleLogin = () => {
    const foundUser = credentials.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/Dashboard");
      }, 1000);
    } else {
      setError("Incorrect credentials");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  useEffect(() => {
    loginBtn.current.disabled = !(email && password);
  }, [email, password]);

  const handleLoginOnEnter = (e) => {
    if (e.charCode === 13) {
      handleLogin();
    }
  };

  return (
    <div className="LoginBg vh-100 img_bg">
      <div className="mx-auto loginDivWidth">
        <div className="w-100 d-flex align-items-center">
          <div className="loginDashboard w-100">
            <div className="d-flex align-items-center loginLogo justify-content-center margin-auto">

              <img
                className="companyLogo"
                height={150}
                src={logo}
                alt="logo"
              />
              {/* <div
                className="d-flex justify-content-center flex-column mt-3"
                style={{ marginLeft: "14px" }}
              >
                <h1 className="loginDashboardCompany crete-family loginESquareTxt">
                  Power Enviro Analyzer
                </h1>
              </div> */}
            </div>

            <div>
              <div>
                <p className="crete-family mb-1 mt-2 text-left">User</p>
                <input
                  className="loginInputs crete-family"
                  value={email}
                  placeholder="User Name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <p className="crete-family mb-1 mt-2 text-left">Password</p>
                <InputGroup className="mb-3">
                  <input
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleLoginOnEnter}
                    type={typeOf}
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon2"
                    value={password}
                    className="loginInputs crete-family"
                  />
                  <div className="mt-2 DMSans-family d-flex align-items-center">
                    <input
                      id="passType"
                      type="checkbox"
                      checked={typeOf !== "password"}
                      onChange={handleChangeType}
                    />
                    <label htmlFor="passType" className="ml-2 mb-0"> Show Password</label>{" "}
                  </div>
                </InputGroup>
              </div>
              <Button
                className="btn themedButton w-100 text-white mt-3 inter-family"
                onClick={handleLogin}
                disabled={isLoading}
                ref={loginBtn}
              >
                {isLoading ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner" />
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
              {error && (
                <div className="alert alert-danger mt-3 text-center" role="alert">
                  <img src={cancel} alt="cancel" /> {error}
                </div>
              )}
              <Link
                to="/ForgotPassword"
                className="forgotPassword d-flex justify-content-center mt-2 w-100 crete-family cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
