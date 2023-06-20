import { Button, Card, Col, Form, InputNumber, Radio, Row } from "antd";
import React from "react";
import AadharUID from "../components/AadharUID";
import TextOnly from "../components/TextOnly";
import RadioGroups from "../components/RadioGroups";

const DemographicVerification = () => {
  return (
    <React.Fragment>
      <div className="w-full h-max flex justify-center items-start py-10">
        <Card className="shadow-md">
          <Form
            fields={[{ name: ["matching_type"], value: 1 }]}
            onFinish={(res) => console.log(res)}
            name="demographic_varification"
          >
            <div className="flex flex-col gap-1 mx-auto w-max">
              <div className="bg-[rgb(42,85,55)_!important] text-white font-bold text-xl">
                Demographic Verification
              </div>
              <div>
                <Form.Item
                  name={"authenticate"}
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Radio.Group>
                    <Radio>Authenticate</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <AadharUID name="uid" />
              <TextOnly name={"name"} label={"Name"} />
              <RadioGroups
                name={"matching_type"}
                options={[
                  { value: 1, label: "Exact" },
                  { value: 2, label: "Partial" },
                ]}
              />
              <div className="flex gap-5 justify-between w-full">
                <label>Matching Value</label>
                <Form.Item
                  name={"matching_value"}
                  rules={[{ required: true, max: 100 }]}
                >
                  <InputNumber className="w-56" />
                </Form.Item>
              </div>
              <Row className="w-full grid grid-cols-2 gap-2">
                <Col span={24}>
                  <TextOnly name={"careof"} label={"Care Of"} />
                </Col>
                <Col span={24}>
                  <TextOnly name={"building"} label={"Building"} />
                </Col>
              </Row>

              <Row className="w-full grid grid-cols-2 gap-2">
                <Col span={24}>
                  <TextOnly name={"landmark"} label={"Landmark"} />
                </Col>
                <Col span={24}>
                  <TextOnly name={"street"} label={"Street"} />
                </Col>
              </Row>

              <Row className="w-full grid grid-cols-2 gap-2">
                <Col span={24}>
                  <TextOnly name={"district"} label={"District"} />
                </Col>
                <Col span={24}>
                  <TextOnly name={"subdistrict"} label={"Sub District"} />
                </Col>
              </Row>

              <Row className="w-full grid grid-cols-2 gap-2">
                <Col span={24}>
                  <TextOnly name={"city"} label={"City"} />
                </Col>
                <Col span={24}>
                  <TextOnly name={"state"} label={"State"} />
                </Col>
              </Row>

              <Row className="w-full grid grid-cols-2 gap-2">
                <Col span={24}>
                  <TextOnly name={"pincode"} label={"Pincode"} />
                </Col>
              </Row>

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

export default DemographicVerification;
