import React from "react";
import "../App.js";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

function Question820() {
  return (
    <h1>Change in Atttiude</h1>,
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
  );

  
}

export default Question820;
