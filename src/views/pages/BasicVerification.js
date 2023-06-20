import { Button, Card, Form, InputNumber, Radio } from "antd";
import React, { useState } from "react";
import AadharUID from "../components/AadharUID";
import TextOnly from "../components/TextOnly";
import RadioGroups from "../components/RadioGroups";
import {validateVerhoeff1} from '../components/utils.js'


const BasicVerification = () => {

  const [uid, setUid] = useState('');
  const [uidname, setUidname] = useState('');
  const [uidmatch, setUidmatch] = useState('');

  const authenticateHandler = () => {
    console.log("button clicked");
    onSubmit()
  }

  const onSubmit = async (e) => {
    //e.preventDefault();
    alert("hari krishna");
    alert("uid value "+uid);
    alert(uid.toString().length);
    if (uid.toString().length === 12 || uid.toString().length === 16) {
      const isValid = validateVerhoeff1(uid);
       console.log('isValid', isValid)
       //alert("invalid UID")
       if(!isValid){
        //  setShowErrorModal(true)
       }
     } else if (uid.toString().length !== 12 || uid.toString().length !== 16) {
       setUid('')
       alert("uid is not valid");
     }
    
  }
  
  
  return (
    <React.Fragment>
      <div className="w-full h-full flex justify-center items-start py-10">
        <Card>
          <Form
            fields={[{ name: ["matching_type"], value: 1 }]}
            onFinish={(res) => console.log(res)}
            name="basic_varification"
          >
            <div className="flex flex-col gap-1 mx-auto w-max">
              <div className="bg-[rgb(42,85,55)_!important] text-white font-bold text-xl">
                Basic Verification
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
              <AadharUID name="uid" setUid={setUid} />
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

              <div className="w-full flex justify-center">
                <Form.Item>
                  <Button
                    className="bg-[#4096ffca_!important]"
                    type="primary"
                    htmlType="submit"
                    onClick={authenticateHandler}
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

export default BasicVerification;
