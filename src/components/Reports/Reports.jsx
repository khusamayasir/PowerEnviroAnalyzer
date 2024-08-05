import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import axios from "axios";
import HeadingTag from "../HeadingTag";

function ReportComponent(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [airQuality, setAirQuality] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [location, setLocation] = useState("");
  const [methane, setMethane] = useState(0);
  const [alcohol, setAlcohol] = useState(0);
  const [carbonMonoxide, setCarbonMonoxide] = useState(0);
  const [flammable, setFlammable] = useState(0);

  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDoc();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  const setDoc = () => {
    let url = `http://localhost:8000/api`;
    axios
      .get(url)
      .then((response) => {
        console.log("API Data", response.data);
        setTemperature(response.data.V0);
        setHumidity(response.data.V1);
        setAirQuality(response.data.V2);
        setLocation(response.data.V3);
        setMethane(response.data.V4);
        setAlcohol(response.data.V5);
        setCarbonMonoxide(response.data.V6);
        setFlammable(response.data.V7);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get(`http://localhost:8000/api`)
      .then((res) => console.log(res, `from our server`))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12">
            <HeadingTag heading="Reports" />
          </Col>
          <Col lg="12">
            <h4 className="text-left mb-4">{location}</h4>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Row className="mb-3">
              <Col className="d-flex justify-content-between ">
                <h4>Current Stats</h4>
                <Button
                  style={{ fontSize: 14, background: "#0d633c" }}
                  onClick={() =>
                    alert("This functionality is under construction")
                  }
                >
                  Generate Report's
                </Button>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg="6">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Temperature</h5>
                    <CardTitle tag="h6">0</CardTitle>
                  </CardHeader>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Humidity</h5>
                    <CardTitle tag="h6">0</CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg="6">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Air Quality</h5>
                    <CardTitle tag="h6">{airQuality}</CardTitle>
                  </CardHeader>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Pressure</h5>
                    <CardTitle tag="h6">{pressure}</CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 style={{ textAlign: "center" }}>Gas Concentration</h5>
                    <CardTitle tag="h6">
                      <div className="d-flex justify-content-between mb-2">
                        <div>Methane</div>
                        <div>{methane}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Carbon Monoxide</div>
                        <div>{carbonMonoxide}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Alcohol</div>
                        <div>{alcohol}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Flammable</div>
                        <div>{flammable}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Dust Particle</div>
                        <div>0</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg="6" className="borderLeftReport ">
            <Row className="mb-3">
              <Col className="d-flex justify-content-between ">
                <h4>Report History</h4>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h6">
                      <h5 style={{ textAlign: "center" }}>Your Reports</h5>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ReportComponent;
