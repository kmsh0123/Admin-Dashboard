import React from "react";
import "./chart.css";
import BreadCrumbs from "./BreadCrumbs";
import { AiFillHeart } from "react-icons/ai";
import LineChart from "../Components/charts/LineChart";
import ColumnAreaChart from "../Components/charts/ColumnAreaChart";
import DonutChart from "../Components/charts/DonutChart.";
import RadarChart from "../Components/charts/RadarChart";
import AreaChart from "../Components/charts/AreaChart";

const Chart = () => {
  return (
    <main className="mx-auto mt-10 px-10">
      <div className="mb-10">
        <h1 className="mb-2 text-xl font-semibold">Charts</h1>
        <BreadCrumbs />
      </div>

      {/* Charts */}
      <div className="">
        <div className="lg:grid lg:grid-cols-2 gap-5 ">
          {/* LeftSide Charts */}
          <div className="">
            {/* Line Column chart */}
            <div className=" shadow-xl rounded-xl p-4 mb-10">
              <section className="">
                <div className="mb-5">
                  <h1 className="text-xl font-semibold">
                    Line Column Mixed Chart
                  </h1>
                </div>
                <div className="mx-auto">
                  <LineChart />
                </div>
              </section>
            </div>

            {/* Column Area chart */}
            <div className=" shadow-xl rounded-xl p-4 mb-10 ">
              <section className="">
                <div className="mb-5">
                  <h1 className="text-xl font-semibold">
                    Column Area Mixed Chart
                  </h1>
                </div>
                <div className="mx-auto">
                  <ColumnAreaChart />
                </div>
              </section>
            </div>
          </div>

          {/* Donut, Radar and Line chart*/}
          <div className="">
            {/* grid */}
            <div className="lg:grid lg:grid-cols-2 gap-5">
              {/* Donut Chart */}
              <div className="shadow-xl rounded-xl p-4 mb-10 lg:h-[445px]">
                <section>
                  <div className="mb-5">
                    <h1 className="text-xl font-semibold">Donut chart</h1>
                  </div>
                  <div className="mx-auto mb-5">
                    <DonutChart />
                  </div>
                </section>
              </div>

              {/* Radar Chart */}
              <div className="shadow-xl rounded-xl p-4 mb-10 lg:h-[445px]">
                <section>
                  <div className="mb-5">
                    <h1 className="text-xl font-semibold">Radar chart</h1>
                    <p className="mt-5 text-sm text-gray-500">
                      Different types of notifications for lots of use cases.
                      Custom classes
                    </p>
                  </div>
                  <div className="mx-auto mb-5">
                    <RadarChart />
                  </div>
                </section>
              </div>
            </div>

            {/* Line Chart */}
            <div className="shadow-xl rounded-xl p-4 mb-10 lg:col-span-2">
              <section>
                <div className="mb-5">
                  <h1 className="text-xl font-semibold">Line chart</h1>
                </div>
                <div className="">
                  <AreaChart />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center p-3 gap-3 items-center">
        <p className="text-sm text-gray-500 ">
          2021 © Flatlogic. Hand-crafted &amp; Made with
        </p>
        <div className="">
          <AiFillHeart className="text-red-600" />
        </div>
      </div>
    </main>
  );
};

export default Chart;
