import { Form, Input } from "antd";
import React from "react";

const TextOnly = ({ name, label }) => {
  return (
    <React.Fragment>
      <div className="flex justify-between gap-3 w-full">
        <label>{label} </label>
        <Form.Item name={name} rules={[{ required: true }]}>
          <Input className="w-56" />
        </Form.Item>
      </div>
    </React.Fragment>
  );
};

export default TextOnly;
