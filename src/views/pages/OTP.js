import { Button, Card, Form, InputNumber } from "antd";
import React from "react";
import RadioGroups from "../components/RadioGroups";
import AadharUID from "../components/AadharUID";

const OTP = () => {
  return (
    <React.Fragment>
      <div className="w-full h-max flex justify-center items-start py-10">
        <Card className="shadow-md">
          <Form
            fields={[{ name: ["authenticate"], value: 1 }]}
            onFinish={(res) => console.log(res)}
            name="otp_varification"
          >
            <div className="flex flex-col gap-3 mx-auto w-max">
              <div className="bg-[rgb(42,85,55)_!important] text-white font-bold text-xl">
                OTP Verification
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
              <div className="w-[100%]">
                <AadharUID name="uid" />
              </div>
              <div className="w-full flex justify-start">
                <Button className="bg-[#4096ffca_!important]" type="primary">
                  SEND OTP
                </Button>
              </div>
              <div className="flex gap-5 justify-between w-full">
                <label>OTP</label>
                <Form.Item name={"otp"} rules={[{ required: true }]}>
                  <InputNumber className="w-56" />
                </Form.Item>
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

export default OTP;
