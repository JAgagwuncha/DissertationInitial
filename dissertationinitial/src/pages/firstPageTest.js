import React from "react";
import "../App.js";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

function FirstPageTest() {
  return (
    <div >
      <h1>1st Page</h1>,
      <Chart
        type="bar"
        width={400}
        height={400}
        alignItems='center'
        series={[
          {
            name: "MyTester",
            data: [10, 200, 300, 400],
          },
        ]}
        options={{}}
      ></Chart>
    </div>
  );
}

export default FirstPageTest;
