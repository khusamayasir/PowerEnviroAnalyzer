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
  //LOAD 1
  const [voltage1, setVoltage1] = useState('');
  const [current1, setCurrent1] = useState('');
  const [power1, setPower1] = useState('');
  const [frequency1, setFrequency1] = useState('');
  const [powerFactor1, setPowerFactor1] = useState('');
  const [energy1, setEnergy1] = useState('');
  //LOAD 2
  const [voltage2, setVoltage2] = useState('');
  const [current2, setCurrent2] = useState('');
  const [power2, setPower2] = useState('');
  const [frequency2, setFrequency2] = useState('');
  const [powerFactor2, setPowerFactor2] = useState('');
  const [energy2, setEnergy2] = useState('');
  //LOAD 3
  const [voltage3, setVoltage3] = useState('');
  const [current3, setCurrent3] = useState('');
  const [power3, setPower3] = useState('');
  const [frequency3, setFrequency3] = useState('');
  const [powerFactor3, setPowerFactor3] = useState('');
  const [energy3, setEnergy3] = useState('');
  const [smoke, setSmoke] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDoc();
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  
  const setDoc = () => {
    let url = 'https://power-enviro-analyzer-server.vercel.app/api';
    axios
      .get(url)
      .then((response) => {
        console.log("API Data", response.data);
        const data = response.data;

        // Map the API data into state
        data.forEach((item) => {
          console.log("hehe",data)
          switch(item.param) {
              //LOAD 1
              case 'voltage1': setVoltage1(item.value); break;
              case 'current1': setCurrent1(item.value); break;
              case 'power1': setPower1(item.value); break;
              case 'frequency1': setFrequency1(item.value); break;
              case 'power_factor1': setPowerFactor1(item.value); break;
              case 'energy1': setEnergy1(item.value); break;
              //LOAD 2
              case 'voltage2': setVoltage2(item.value); break;
              case 'current2': setCurrent2(item.value); break;
              case 'power2': setPower2(item.value); break;
              case 'frequency2': setFrequency2(item.value); break;
              case 'power_factor2': setPowerFactor2(item.value); break;
              case 'energy2': setEnergy2(item.value); break;
              //LOAD 3
              case 'voltage3': setVoltage3(item.value); break;
              case 'current3': setCurrent3(item.value); break;
              case 'power3': setPower3(item.value); break;
              case 'frequency3': setFrequency3(item.value); break;
              case 'power_factor3': setPowerFactor3(item.value); break;
              case 'energy3': setEnergy3(item.value); break;
              //Environmental Data
              case 'smoke': setSmoke(item.value); break;
              case 'temperature': setTemperature(item.value); break;
              case 'humidity': setHumidity(item.value); break;
              default: break;
            }
          }
        );
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
                    <h5 style={{ textAlign: "center" }}>LOAD 1 </h5>
                    <CardTitle tag="h6">
                      <div className="d-flex justify-content-between mb-2">
                        <div>Voltage</div>
                        <div>{voltage1} V</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Current</div>
                        <div>{current1} Amp</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power</div>
                        <div>{power1} Watt</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Frequency</div>
                        <div>{frequency1} Hz</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power Factor</div>
                        <div>{powerFactor1}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Energy Consumption</div>
                        <div>{energy1} KWh</div>
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
                    <h5 style={{ textAlign: "center" }}>LOAD 2 </h5>
                    <CardTitle tag="h6">
                      <div className="d-flex justify-content-between mb-2">
                        <div>Voltage V</div>
                        <div>{voltage2}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Current</div>
                        <div>{current2} Amp</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power</div>
                        <div>{power2} Watt</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Frequency</div>
                        <div>{frequency2}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power Factor</div>
                        <div>{powerFactor2}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Energy Consumption</div>
                        <div>{energy2} KWh</div>
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
                    <h5 style={{ textAlign: "center" }}>LOAD 3 </h5>
                    <CardTitle tag="h6">
                      <div className="d-flex justify-content-between mb-2">
                        <div>Voltage</div>
                        <div>{voltage3} V</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Current</div>
                        <div>{current3} Amp</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power</div>
                        <div>{power3} Watt</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Frequency</div>
                        <div>{frequency3} Hz</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Power Factor</div>
                        <div>{powerFactor3}</div>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>Energy Consumption</div>
                        <div>{energy3} KWh</div>
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
                <CardTitle tag="h5">Temperature: {temperature}</CardTitle>
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
                <CardTitle tag="h5">Humidity: {humidity}</CardTitle>
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
                <CardTitle tag="h5">Smoke: {smoke}</CardTitle>
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