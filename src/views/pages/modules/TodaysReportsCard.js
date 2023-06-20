import { Card, Progress, Statistic } from "antd";
import React from "react";
import { BiUserPlus } from "react-icons/bi";

const TodaysReportsCard = ({ title, value }) => {
  return (
    <React.Fragment>
      <div
        className="w-full max-w-[400px] min-w-[380px] px-8"
        key={"" + Math.random()}
      >
        <Card className="shadow-sm bg-[#45be68] w-full">
          <div className="grid grid-cols-[75%_25%] gap-3 justify-evenly items-center w-full">
            <Statistic
              className="grid items-center text-fuchsia-100"
              title={
                <span className="text-white font-semibold text-lg">
                  {title}
                </span>
              }
              value={value}
              prefix={<BiUserPlus color="lightgrey" size={48} />}
            />
            <div>
              <Progress
                width={42}
                strokeColor={"gold"}
                // strokeColor={"rgb(67 124 76)"}
                // trailColor="rgba(59, 130, 246,0.25)"
                trailColor="white"
                type="circle"
                percent={30}
                format={(percent) => ``}
              />
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default TodaysReportsCard;
