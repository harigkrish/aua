import React, { useEffect, useRef, useState } from "react";

import { useAuth } from "../utilities/contexts/AuthContext";

import { Button, Layout, Space } from "antd";
import classNames from "classnames";
import { IconProvider, reacticons } from "../utilities/icons";
import { NavLink, Outlet } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";
import Sidebar from "./Sidebar";
const { Header, Footer, Sider, Content } = Layout;

const FullLayout = ({ sidebar = true }) => {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(user?.user ? true : false);
  const [screen, setScreen] = useState(null);
  const contentRef = useRef({});
  useEffect(() => {
    return setCollapsed(true);
  }, []);

  useEffect(() => {
    console.log("contentref", contentRef?.current?.clientWidth);
    setScreen(contentRef.current?.clientWidth);
  }, [contentRef.current?.clientWidth]);
  return (
    <React.Fragment>
      <Layout className="h-full">
        <Sider
          className={classNames(
            "bg-[rgb(240,240,240)_!important] grid h-full overflow-hidden",
            {
              hidden: collapsed || !sidebar,
              block: collapsed && sidebar,
            }
          )}
          style={{}}
        >
          <div className="flex items-center justify-end h-16 border-b border-b-slate-300">
            <Button
              shape="round"
              className={classNames(
                "border-0  aspect-square flex p-[4px_!important] justify-center items-center ",
                {
                  block: !collapsed,
                }
              )}
              onClick={() => setCollapsed(!collapsed)}
              // size="15"
              icon={<FaLessThan className="text-slate-500 w-12" size={12} />}
            ></Button>
          </div>
          <Sidebar />
        </Sider>
        <Layout className="w-full grid grid-rows-[104px_auto] grid-cols-1 overflow-x-hidden">
          <Header className="w-full h-[32rem_important] px-[0px_!important]">
            <div className="w-full h-full grid grid-rows-[64px_40px]">
              <div className="w-full h-full px-[24px_!important] inline-flex justify-between align-top bg-[rgb(42,85,55)_!important]">
                <div className="my-auto flex items-center m-0 gap-4">
                  <div>
                    <Button
                      className={classNames("border-0", { hidden: !collapsed })}
                      onClick={() => setCollapsed(!collapsed)}
                      icon={
                        <IconProvider
                          icon={reacticons.MenuToggler}
                          color={"white"}
                        />
                      }
                    ></Button>
                  </div>
                  <img
                    src="assets/images/logo.png"
                    className="text-sm h-[48px_!important]"
                    alt="logo"
                  />
                </div>
                <div className="flex items-center">
                  
              </div>
              {user?.user ? 
              <div className="flex items-center"> 
                <Button
                    className="bg-blue-500 border-0 text-white hover:bg-blue-700 hover:text-[white_!important]"
                    onClick={
                      user?.user
                        ? logout
                        : () => window.location.replace("/signin")
                    }
                  >
                    Logout
                  </Button>
              </div>
              : <div className="flex items-center">
                <Button
                    className="bg-blue-500 border-0 text-white hover:bg-blue-700 hover:text-[white_!important]"
                    onClick={
                      user?.user
                        ? logout
                        : () => window.location.replace("/")
                    }
                  >
                    Home
                  </Button>
                  <Button
                    className="bg-blue-500 border-0 text-white hover:bg-blue-700 hover:text-[white_!important]"
                    onClick={
                      user?.user
                        ? logout
                        : () => window.location.replace("/signin")
                    }
                  >
                    Services
                  </Button>
                  <Button
                    className="bg-blue-500 border-0 text-white hover:bg-blue-700 hover:text-[white_!important]"
                    onClick={
                      user?.user
                        ? logout
                        : () => window.location.replace("/signin")
                    }
                  >
                    Dashboard
                  </Button>
                <Button
                    className="bg-blue-500 border-0 text-white hover:bg-blue-700 hover:text-[white_!important]"
                    onClick={
                      user?.user
                        ? logout
                        : () => window.location.replace("/signin")
                    }
                  >
                    Sign In
                  </Button>
            </div>
            }
            </div>
            </div>
          </Header>
          <Content
            ref={contentRef}
            className="h-full w-full bg-[rgb(255,255,255)_!important] overflow-scroll scrollbar-thumb-rounded scrollbar-track-rounded  scrollbar-thumb-zinc-600 scrollbar-track-slate-400 "
            style={{}}
          >
            <Outlet context={[collapsed, setCollapsed]} />
          </Content>
          {/* <Footer style={{}}>Footer</Footer> */}
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default FullLayout;
