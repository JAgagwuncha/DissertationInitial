import React from "react";
import "../App.js";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

function Home() {
  return (
    <div>
      <h1>1st Page</h1>
      <Chart
        type="bar"
        width={600}
        height={600}
        series={[
          {
            name: "MyTester",
            data: [50, 200, 300, 400],
          },
        ]}
        options={{}}
      ></Chart>
    </div>
  );
}

export default Home;
