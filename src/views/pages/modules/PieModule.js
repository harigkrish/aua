import { BiDownload } from "react-icons/bi";
import { IconProvider, reacticons } from "../../../utilities/icons";
import PieChart from "../../components/PieChart";
import React from "react";

const PieModule = ({ title, data, type, value }) => {
  
  return (
    <React.Fragment>
      <div className="grid grid-rows-[auto_300px] h-[350px] w-fit mx-auto shadow-md">
        <div className="flex justify-between items-center p-4 shadow-sm">
          <div>{title}</div>
          <div>
            <BiDownload size={20} color="black" />
          </div>
        </div>

        <PieChart data={data} type={type} value={value} />
      </div>
    </React.Fragment>
  );
};

export default PieModule;
