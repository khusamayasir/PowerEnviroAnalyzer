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
import AirQualityGraph from "../Charts/AirQuality";
import TemperatureGraph from "../Charts/Temperature";
import DustParticleGraph from "../Charts/DustParticles";
import HeadingTag from "../HeadingTag";

function DashboardComponent(props) {
  //const [bigChartData, setbigChartData] = React.useState("data1");
  // const [temperature, setTemperature] = useState(0);
  // const [humidity, setHumidity] = useState(0);
  // const [airQuality, setAirQuality] = useState(0);
  // const [pressure, setPressure] = useState(0);
  // const [location, setLocation] = useState("");
  // const [methane, setMethane] = useState(0);
  // const [alcohol, setAlcohol] = useState(0);
  // const [carbonMonoxide, setCarbonMonoxide] = useState(0);
  // const [flammable, setFlammable] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoc();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let url = 'http://localhost/api.php';
    axios
      .get(url)
      .then((response) => {
        console.log("API Data", response.data);
        // setTemperature(response.data.V0);
        // setHumidity(response.data.V1);
        // setAirQuality(response.data.V2);
        // setLocation(response.data.V3);
        // setMethane(response.data.V4);
        // setAlcohol(response.data.V5);
        // setCarbonMonoxide(response.data.V6);
        // setFlammable(response.data.V7);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const setDoc = () => {
    let url = 'http://localhost/api.php';
    axios
      .get(url)
      .then((response) => {
        console.log("API Data", response.data);
        // setTemperature(response.data.V0);
        // setHumidity(response.data.V1);
        // setAirQuality(response.data.V2);
        // setLocation(response.data.V3);
        // setMethane(response.data.V4);
        // setAlcohol(response.data.V5);
        // setCarbonMonoxide(response.data.V6);
        // setFlammable(response.data.V7);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12">
            <HeadingTag heading="Dashboard" />
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <h4 className="text-left mb-3">Electrical Data</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Row className="mb-3">
              <Col lg="12">
                <Card className="card-chart">
                  <CardHeader className="card-header">
                    <h5 style={{ textAlign: "center" }}>LOAD 1</h5>
                    <CardTitle tag="h6">
                      <div className="d-flex justify-content-between mb-2">
                        <div>Voltage</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Current</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Frequency</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power Factor</div>
                        <div>0</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Energy Consumption</div>
                        <div>0</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg="4">
            <Row className="mb-3">
            <Col lg="12">
                <Card className="card-chart">
                  <CardHeader className="card-header">
                    <h5 style={{ textAlign: "center" }}>LOAD 2</h5>
                    <CardTitle tag="h6">
                      <div className="d-flex justify-content-between mb-2">
                        <div>Voltage</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Current</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Frequency</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power Factor</div>
                        <div>0</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Energy Consumption</div>
                        <div>0</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg="4">
            <Row className="mb-3">
            <Col lg="12">
                <Card className="card-chart">
                  <CardHeader className="card-header">
                    <h5 style={{ textAlign: "center" }}>LOAD 3</h5>
                    <CardTitle tag="h6">
                      <div className="d-flex justify-content-between mb-2">
                        <div>Voltage</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Current</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Frequency</div>
                        <div>{}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power Factor</div>
                        <div>0</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Energy Consumption</div>
                        <div>0</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <h4 className="text-left mb-3">Environmental Data</h4>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Temperature: 0</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <AirQualityGraph />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Humidity: 0</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <TemperatureGraph />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Smoke: 0</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <DustParticleGraph />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DashboardComponent;
