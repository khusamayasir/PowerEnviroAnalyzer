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
import HumidityGraph from '../Charts/Humidity'
import SmokeGraph from '../Charts/Smoke'
import TemperatureGraph from '../Charts/Temperature'
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

  useEffect(() => {
    let url = 'https://power-enviro-analyzer-server-beta.vercel.app/getData';
    axios
      .get(url)
      .then((response) => {
        console.log("API Data", response.data);
        const data = response.data;
  
        // Set each state directly from the data object
        setVoltage1(data.voltage1);
        setCurrent1(data.current1);
        setPower1(data.power1);
        setFrequency1(data.frequency1);
        setPowerFactor1(data.power_factor1);
        setEnergy1(data.energy1);
        setVoltage2(data.voltage2);
        setCurrent2(data.current2);
        setPower2(data.power2);
        setFrequency2(data.frequency2);
        setPowerFactor2(data.power_factor2);
        setEnergy2(data.energy2);
        setVoltage3(data.voltage3);
        setCurrent3(data.current3);
        setPower3(data.power3);
        setFrequency3(data.frequency3);
        setPowerFactor3(data.power_factor3);
        setEnergy3(data.energy3);
        setSmoke(data.smoke);
        setTemperature(data.temperature);
        setHumidity(data.humidity);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const setDoc = () => {
    let url = 'https://power-enviro-analyzer-server-beta.vercel.app/getData';
    axios
      .get(url)
      .then((response) => {
        console.log("API Data", response.data);
        const data = response.data;
  
        // Set each state directly from the data object
        setVoltage1(data.voltage1);
        setCurrent1(data.current1);
        setPower1(data.power1);
        setFrequency1(data.frequency1);
        setPowerFactor1(data.power_factor1);
        setEnergy1(data.energy1);
        setVoltage2(data.voltage2);
        setCurrent2(data.current2);
        setPower2(data.power2);
        setFrequency2(data.frequency2);
        setPowerFactor2(data.power_factor2);
        setEnergy2(data.energy2);
        setVoltage3(data.voltage3);
        setCurrent3(data.current3);
        setPower3(data.power3);
        setFrequency3(data.frequency3);
        setPowerFactor3(data.power_factor3);
        setEnergy3(data.energy3);
        setSmoke(data.smoke);
        setTemperature(data.temperature);
        setHumidity(data.humidity);
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
            <Row className="mb-3 responsive-rows-gap">
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
            <Row className="mb-3 responsive-rows-gap">
              <Col lg="12">
                <Card className="card-chart">
                  <CardHeader className="card-header">
                    <h5 style={{ textAlign: "center" }}>LOAD 2 </h5>
                    <CardTitle tag="h6">
                      <div className="d-flex justify-content-between mb-2">
                        <div>Voltage</div>
                        <div>{voltage2} V</div>
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
            <Row className="mb-3 responsive-rows-gap">
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
        <Row className="mb-3 responsive-rows-gap">
          <Col lg="4" className="responsive-rows-gap">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Temperature: {temperature}</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <TemperatureGraph />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" className="responsive-rows-gap">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Humidity: {humidity}</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <HumidityGraph />

                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" className="responsive-rows-gap">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Smoke: {smoke}</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <SmokeGraph />
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