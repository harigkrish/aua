import { Col, Row } from "antd";
import React, { useState } from "react";
import OnboardManagement from "./modules/OnBoardManagement";
import TodaysReportsCard from "./modules/TodaysReportsCard";
import { Pie } from "@ant-design/plots";
import PieModule from "./modules/PieModule";
import CountUp from 'react-countup';


const Reports = () => {
  const reportValue = 1000; //useState(<CountUp start={0} end={162}  duration={5} /> );
  
  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <OnboardManagement />
        </Col>
      </Row>
      <Row
        justify={"center"}
        className="grid grid-cols-1 mx-auto justify-center lg:flex  "
        align={"middle"}
      >
        <Col span={8} className="flex justify-center items-center mx-auto">
          <TodaysReportsCard title={"Today's Authenticated"} value={ reportValue } >
          
		  <CountUp start={0} end={162}  duration={5} /> 
      </TodaysReportsCard>
        </Col>
        <Col span={8} className="flex justify-center items-center mx-auto">
          <TodaysReportsCard title={"Today's eKYC"} value={14431} />
        </Col>
        <Col span={8} className="flex justify-center items-center mx-auto">
          <TodaysReportsCard title={"Today's Authenticate"} value={14431} />
        </Col>
      </Row>
      <Row className="grid grid-cols-[50%_50%] justify-center my-5">
        <Col span={12} className="flex justify-center mx-auto">
          <div className="w-full h-full p-50 mx-auto">
            <PieModule
              data={[
                {
                  type: "subkua1",
                  value: 700,
                },
                {
                  type: "subkua2",
                  value: 300,
                },
                {
                  type: "subkua3",
                  value: 300,
                },
                {
                  type: "subkua4",
                  value: 200,
                },
              ]}
              title={"Authenticate Report"}
              type={"type"}
              value={"value"}
            />
          </div>
        </Col>
        <Col span={12} className="flex justify-center mx-auto">
          <PieModule
            data={[
              {
                type: "subkua1",
                value: 500,
              },
              {
                type: "subkua2",
                value: 300,
              },
              {
                type: "subkua3",
                value: 300,
              },
              {
                type: "subkua4",
                value: 200,
              },
            ]}
            title={"Ekyc Report"}
            type={"type"}
            value={"value"}
            
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Reports;
