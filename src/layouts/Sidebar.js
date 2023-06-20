// import classNames from "classnames";
import classNames from "classnames";
import React, { useContext, useEffect } from "react";
import { makeID } from "../utilities/helpers/helper";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../utilities/contexts/AuthContext";
import { IconProvider, reacticons } from "../utilities/icons";

// import { Tooltip } from "antd";
const navigation = [
  {
    title: "Home",
    href: "/dashboard",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
  {
    title: "Basic Auth",
    href: "/basic-auth",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
  {
    title: "Demographiv",
    href: "/demographic",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
  {
    title: "OTP",
    href: "/otp",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
  {
    title: "Biometric",
    href: "/biometric",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
  {
    title: "BFD",
    href: "/bfd",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
  {
    title: "Iris",
    href: "/iris",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
  {
    title: "User Management",
    href: "/user-management",
    icon: reacticons.Dashboard,
    isPrivate: false,
  },
];

const Sidebar = ({ collapsed = false }) => {
  // const { user } = useAuth();
  const { user, login, logout } = useAuth();
  let location = useLocation();

  // const Tooltipof = (element,text) => <Tooltip placement="topLeft" title={text}>{element}</Tooltip>
  // console.log(location.pathname);
  return (
    <React.Fragment>
      <div className="w-full h-full flex flex-col bg-[rgba(241,241,241,1)] justify-between ">
        <div className="relative overflow-hidden">
          {navigation.map((navi) => (
            <React.Fragment key={`sidebar_option_${makeID(navi.title)}`}>
              <Link
                to={navi.href}
                className={classNames("hover:text-black", { hidden: !user })}
              >
                <div
                  className={classNames(
                    "inset-0 w-full flex gap-5 items-center",
                    {
                      "bg-[#0658390f]": location.pathname === navi.href,
                    }
                  )}
                >
                  <div
                    className={classNames("inset-y-0 w-1 h-[32px] text-sm", {
                      "bg-[rgba(25,118,210,1)]":
                        location.pathname === navi.href,
                    })}
                  ></div>
                  <div className="flex flex-1 gap-4 items-center">
                    <IconProvider
                      size={14}
                      className={classNames("text-black", {
                        "opacity-60": location.pathname !== navi.href,
                      })}
                      icon={navi.icon}
                    />
                    {!collapsed ? (
                      <p
                        className={classNames(
                          "text-sm font-medium inline m-0 leading-[normal] hover:opacity-80",
                          {
                            "opacity-60": location.pathname !== navi.href,
                          }
                        )}
                      >
                        {navi.title}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
