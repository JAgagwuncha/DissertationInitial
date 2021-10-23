import React from "react";
import "../App.js";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

function FirstPageTest() {
  return (
    (<h1>1st Page</h1>),
    (
      <div class="graphic-container">
        <Chart
          type="bar"
          width={400}
          height={400}
          series={[
            {
              name: "MyTester",
              data: [10, 200, 300, 400],
            },
          ]}
          options={{}}
        ></Chart>
      </div>
    )
  );
}

export default FirstPageTest;
