import { Form, Input, InputNumber } from "antd";
import React, { useState } from "react";

const AadharUID = ({ name = "" ,setUid}) => {
  // const [uid, setUid] = useState('');
  // const [uidLength, setUidLength] = useState(16);
   const onUidChange= (e) => {
	  const re = /^[0-9\b]+$/;
     
        if (e === '' || re.test(e)) {
          setUid(e)
          
       }
      //  if(e.toString().length == 12 || e.toString().length == 16){
      //   alert("enter valied aadhaar number or virtual aadhaar number if case");
      // }else{
      //   alert("enter valied aadhaar number or virtual aadhaar number else case");
      // }
    
  }
  return (
    <React.Fragment>
      <div className="flex justify-between w-full gap-3">
        <label>UID / VID</label>
        <Form.Item name={name} rules={[{ required: true }]}>
          <InputNumber onChange={(val) =>{onUidChange(val)}} className="w-56"  />
        </Form.Item>
      </div>
    </React.Fragment>
  );
};

export default AadharUID;
