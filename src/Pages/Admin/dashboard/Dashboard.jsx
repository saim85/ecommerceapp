import React, { useContext } from "react";
import MyContext from "../../../Context/data/Mycontext";
import Layout from "../../../Components/Layout/Layout";
import { FaUserTie } from "react-icons/fa";
import DashboardTab from "./DashboardTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Dashboard() {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container mx-auto px-5 py-10  mb-10">
          {/* admin-card */}
          <div className="flex flex-wrap -m-4 text-center">
            {/* first card */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className=" text-purple-500  font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            {/* 2 card */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className=" text-purple-500  font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            {/* 3 card */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className=" text-purple-500  font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            {/* 4 card */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie size={50} />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h2>
                <p
                  className=" text-purple-500  font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* dashboard */}
        <DashboardTab/>

        {/* TABLIST  */}
   
      </section>
    </Layout>
  );
}

export default Dashboard;
