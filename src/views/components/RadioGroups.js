import { Form, Radio } from "antd";
import React from "react";

const RadioGroups = ({ name, label, options, labelID, optionID }) => {
  return (
    <React.Fragment>
      <div className="flex">
        <label>{label} </label>
        <Form.Item
          className=" mt-3 mb-0"
          name={name}
          rules={[{ required: true }]}
        >
          <Radio.Group
            options={options.map((option) => ({
              ...option,
              label: option?.[labelID] || option?.label,
              value: option?.[optionID] || option?.value,
            }))}
          />
        </Form.Item>
      </div>
    </React.Fragment>
  );
};

export default RadioGroups;
