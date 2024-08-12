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
// import AirQualityGraph from "../Charts/AirQuality";
// import TemperatureGraph from "../Charts/Temperature";
// import DustParticleGraph from "../Charts/DustParticles";
import HeadingTag from "../HeadingTag";

function LoadTwoComponent(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12">
            <HeadingTag heading="Load 2" />
          </Col>
        </Row>

        <Row className="mb-3 responsive-rows-gap">
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Voltage</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {/* <AirQualityGraph /> */}
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Current</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {/* <TemperatureGraph /> */}
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Power</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {/* <DustParticleGraph /> */}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-3 responsive-rows-gap">
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Frequency</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {/* <AirQualityGraph /> */}
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Power Factor</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {/* <TemperatureGraph /> */}
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card-chart">
              <CardHeader className="card-header">
                <CardTitle tag="h5">Energy Consumption</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {/* <DustParticleGraph /> */}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LoadTwoComponent;
