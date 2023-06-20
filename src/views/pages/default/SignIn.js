import { Button, Col, Form, Input, Row } from "antd";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../utilities/contexts/AuthContext";
import { loginApi } from "../../../utilities/helpers/api.helper";

const SignIn = () => {
  const { login, setLoader, isLoading } = useAuth();
  const [field, setField] = useState({ username: "", password: "" });
  //const [loginToken, setLoginToken] = useState("token");
  const [form] = Form.useForm();
  useEffect(() => {
    console.log("signin opened");
  }, []);

  const onLogin = () => {
    setLoader(true);
    setTimeout(() => {
      login({ user: { user: field.username }, token: "token" });
      setLoader(false);
    }, 3000);
    // loginApi(
    //   "/auth/login",
    //   {
    //     username: field.username,
    //     password: field.password,
    //   },
    //   (response) => {
    //     login({ user: field.username, token: response["access_token"] });
    //   },
    //   () => {
    //     setTimeout(() => setLoader(false), 60000);
    //   }
    // );
  };

  useEffect(() => {
    if (isLoading) setTimeout(() => setLoader(false), 5000);
  }, [isLoading]);

  return (
    <React.Fragment>
      <div className="h-full grid grid-rows-[auto] gap-8">
        {/* <div className="w-full h-full inline-flex justify-between align-top bg-[rgb(42,85,55)]">
          <div className="my-auto mx-4">
            
            <img
              src="assets/images/logo.png"
              className="text-sm h[48px_!important]"
              alt="logo"
              
            />
          </div>
        </div> */}
        <div className="w-full mx-auto h-full flex  items-center">
          <div
            className={classNames(
              "relative h-4/6 flex flex-row justify-center w-full"
            )}
          >
            <div
              className="inline-flex flex-col justify-center md:w-5/12 w-full "
              style={{ maxWidth: 375 }}
            >
              <div className="container flex flex-col rounded-xl shadow-lg bg-[rgba(241,241,241,1)] dark:bg-stone-700 p-3">
                <div className="p-3 ">
                  <div className="text-3xl font-bold text-center text-transparent text-[#ff0000] font-[manrope] ">
                    Login
                  </div>
                </div>

                <div className="p-3">
                  <Form
                    form={form}
                    className="flex flex-col "
                    layout="vertical"
                    onFinish={onLogin}
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your username!",
                        },
                      ]}
                    >
                      <Input
                        type="task"
                        id="task"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="username"
                        onChange={(e) =>
                          setField({ ...field, username: e.target.value })
                        }
                        required
                      />
                    </Form.Item>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="password"
                        className="bg--50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) =>
                          setField({ ...field, password: e.target.value })
                        }
                      />
                    </Form.Item>
                    <Form.Item className="mx-auto">
                      <button
                        htmlType="submit"
                        className="text-white  flex justify-center items-center w-[127px] h-[42px] px-5 py-2.5 mx-0 mb-6 bg-[#ff0000] hover:bg-[#ff0000] focus:ring-offset-red-400 focus:outline-none focus:bg-[#ff0000] text-lg rounded-lg text-center "
                      >
                        Submit
                      </button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
