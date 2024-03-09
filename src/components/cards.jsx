import React from "react";
import { Link } from 'react-router-dom';
function cards() {
  return (
    <>
      <p className="mr-20 ml-20 place-items-center mt-20 text-black font-black text-2xl">
        Admin Console
      </p>
      <br />
      <div className="grid gap-4 lg:grid-cols-3 mr-20 ml-20 w-100 place-items-center text-black">
        <div className="max-w-sm p-6 bg-white text-black border border-black-300 rounded-lg shadow-md lg:max-w-sm transition-transform transform hover:scale-105">
          <svg
            className="h-8 w-8 text-blue-500 w-full lg:max-w-sm transition-transform transform hover:scale-105"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {" "}
            <circle cx="12" cy="12" r="3" />{" "}
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          <Link to="">
            <h5 className="mb-2 text-black text-2xl font-semibold w-full lg:max-w-sm text-center ">
              Admin
            </h5>
          </Link>
          <p className="mb-3 font-normal text-black">
            Manage System Settings and configurations
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white text-black border border-black-300 rounded-lg shadow-md lg:max-w-sm transition-transform transform hover:scale-105">
          <svg
            className="h-8 w-8 text-blue-500 w-full lg:max-w-sm transition-transform transform hover:scale-105"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>

          <Link to="">
            <h5 className="mb-2 text-black text-center text-2xl font-semibold">
              Newsletter
            </h5>
          </Link>
          <p className="mb-3 font-normal text-black">
            create and send newletters follow for more
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white text-black border border-black-300 rounded-lg shadow-md lg:max-w-sm transition-transform transform hover:scale-105">
          <svg
            className="h-8 w-8 text-blue-500 w-full  transition-transform transform hover:scale-105"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>

          <Link to="">
            <h5 className="mb-2 text-black text-center text-2xl font-semibold">
              Reports Generation
            </h5>
          </Link>
          <p className="mb-3 font-normal text-black">
            Generate and manage reports follow for more
          </p>
        </div>
        <div className="max-w-sm p-6 bg-white text-black border border-black-300 rounded-lg shadow-md lg:max-w-sm transition-transform transform hover:scale-105">
          <svg
            className="h-8 w-8 text-blue-500 w-full lg:max-w-sm transition-transform transform hover:scale-105"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
            <line x1="13" y1="8" x2="15" y2="8" />{" "}
            <line x1="13" y1="12" x2="15" y2="12" />
          </svg>
          <Link to="">
            <h5 className="mb-2 text-black text-center text-2xl font-semibold">
              Knowledge Management
            </h5>
          </Link>
          <p className="mb-3 font-normal text-black">
            organize and retrieve Knowledge resources
          </p>
        </div>

        <div className="max-w-sm p-6 bg-white text-black border border-black-300 rounded-lg shadow-md lg:max-w-sm transition-transform transform hover:scale-105">
        <svg className="h-8 w-8 text-blue-500 w-full lg:max-w-sm transition-transform transform hover:scale-105"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <ellipse cx="12" cy="5" rx="9" ry="3" />  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
          <Link to="/CountryInfo">
            <h5 className="mb-2 text-black text-center text-2xl font-semibold">
              API data from REST COUNTRIES
            </h5>
          </Link>
          <p className="mb-3 font-normal text-black">
          APi data from REST COUNTRIES
          </p>
          <Link to="/CountryInfo" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        Let's See the Api Data
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </Link>
        </div>
      </div>
    </>
  );
}

export default cards;
