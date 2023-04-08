import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
        <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
          <div className="flex items-center justify-center pt-6">
            <svg
              width={35}
              height={30}
              viewBox="0 0 256 366"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="12.5189534%"
                  y1="85.2128611%"
                  x2="88.2282959%"
                  y2="10.0225497%"
                  id="linearGradient-1"
                >
                  <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%" />
                  <stop stopColor="#FF0057" offset="86.1354%" />
                </linearGradient>
              </defs>
              <g>
                <path
                  d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                  fill="#001B38"
                />
                <circle
                  fill="url(#linearGradient-1)"
                  transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                  cx="147.013244"
                  cy="147.014675"
                  r="78.9933938"
                />
                <circle
                  fill="url(#linearGradient-1)"
                  opacity="0.5"
                  transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                  cx="147.013244"
                  cy="147.014675"
                  r="78.9933938"
                />
              </g>
            </svg>
          </div>
          <nav className="mt-6">
            <div>
              <NavLink
                className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                to="/dashboard"
              >
                <span className="text-left">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Dashboard</span>
              </NavLink>
              <NavLink
                className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                to="/userAppointment"
              >
                <span className="text-left">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z" />
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">
                  Appointment Doctor
                </span>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
