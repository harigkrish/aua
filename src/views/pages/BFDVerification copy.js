import { Button, Card, Col, Form, InputNumber, Radio, Row } from "antd";
import React from "react";
import AadharUID from "../components/AadharUID";
import TextOnly from "../components/TextOnly";
import RadioGroups from "../components/RadioGroups";
import CheckBoxes from "../components/CheckBoxes";
import CustomSelect from "../components/CustomSelect";

const IRISVerification = () => {
  const fingerPositions = [
    "ALL",
    ...["left", "right"].flatMap((side) =>
      ["eye"].map((finger) => `${side} ${finger}`.toUpperCase())
    ),
  ].map((each, i) => ({ value: i + 1, label: each }));
  return (
    <React.Fragment>
      <div className="w-full h-max flex justify-center items-start py-10">
        <Card className="shadow-md">
          <Form
            fields={[{ name: ["matching_type"], value: 1 }]}
            onFinish={(res) => console.log(res)}
            name="eye_varification"
          >
            <div className="flex flex-col gap-1 mx-auto w-max">
              <div className="bg-[rgb(42,85,55)_!important] text-white font-bold text-xl">
                Iris Verification
              </div>
              <div>
                <Form.Item
                  name={"authenticate"}
                  rules={[{ required: true, message: "Required" }]}
                >
                  <RadioGroups
                    options={[
                      { value: 1, label: "Authenticate" },
                      { value: 2, label: "Ekyc" },
                    ]}
                  />
                </Form.Item>
              </div>
              <AadharUID name="uid" />
              <TextOnly name={"name"} label={"Name"} />
              <CheckBoxes
                name={"eye"}
                label={"Eye"}
                options={["Single", "Multiple"]}
              />

              <CustomSelect
                label={"Eye Position"}
                name={"eyeposition"}
                options={fingerPositions}
              />

              <div>
                <label>Capture Eyes</label>
              </div>

              <div className="w-full flex justify-center">
                <Form.Item>
                  <Button
                    className="bg-[#4096ffca_!important]"
                    type="primary"
                    htmlType="submit"
                  >
                    AUTHENTICATE
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default IRISVerification;
