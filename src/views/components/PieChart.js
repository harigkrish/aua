import { Pie } from "@ant-design/plots";
import React from "react";
import { useNavigate } from "react-router-dom";
const PieChart = ({ data, type = "type", value = "value" }) => {

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  const navigate = useNavigate();
	function demoOnClick(e) {
    e.preventDefault();
    alert(e);
		navigate("/subkuapireports");
    }
  return (

    
    <React.Fragment>
      <Pie {...config}
        width={500}
        height={300}
        colorField={type}
        radius={0.6}
        angleField={value}
        label={{
          type: "outer",
          content: "{name} {value}",
        }}
        data={data}
        
        // onClick={(demoOnClick) => {alert('hari')}}
        onReady={(plot) => {
          plot.on("element:click", (...args) => {
            console.log(args);
          });
        }}
      />
    </React.Fragment>
  );
};

export default PieChart;
