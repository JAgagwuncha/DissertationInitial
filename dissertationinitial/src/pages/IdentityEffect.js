import React from "react";
import "../App.js";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

class IdentityEffect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "The Effect of Discriminaiton on attitude towards learning",
          data: [6,5,8,9,4,7,6,7,7,1,8,9,6,5,7,8,7,7,7,6],
        },
        // {
        //   name: "Attitude towards learning post UEA",
        //   data: [8, 8, 5, 6, 8, 2, 8, 7, 8, 8, 5, 9, 8, 1, 7, 5, 6, 7, 6, 7],
        // },
      ],
      options: {
        chart: {
          type: "bar",
          height: 430,
          title: "name",
        },
        title: {
          text: "The Effect of Discriminaiton on attitude towards learning",
          align: "center",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          title="Work please"
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={430}
        />
      </div>
    );
  }
}

export default IdentityEffect;
