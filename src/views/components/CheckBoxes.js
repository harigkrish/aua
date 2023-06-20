import { Checkbox, Form, Radio } from "antd";
import React from "react";

const CheckBoxes = ({ name, label, options, labelID, optionID }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 items-center w-full content-center mb-3">
        <label>{label} </label>
        <Form.Item className="mb-0" name={name} rules={[{ required: true }]}>
          <Checkbox.Group options={options} />
        </Form.Item>
      </div>
    </React.Fragment>
  );
};

export default CheckBoxes;
