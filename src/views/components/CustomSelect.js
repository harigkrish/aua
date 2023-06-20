import { Form, Select } from "antd";
import React from "react";

const CustomSelect = ({
  mode,
  options,
  optionID,
  optionLabel,
  label,
  name,
}) => {
  return (
    <React.Fragment>
      <div className="flex grid-cols-2 justify-between w-full gap-3">
        <label>{label}</label>
        <Form.Item name={name} rules={[{ required: true }]}>
          <Select
            mode={mode}
            className="w-56"
            style={{
              width: "14rem",
            }}
            placeholder="Please select"
            options={options}
          />
        </Form.Item>
      </div>
    </React.Fragment>
  );
};

export default CustomSelect;
