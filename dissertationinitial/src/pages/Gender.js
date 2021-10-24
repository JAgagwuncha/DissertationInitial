import "../App.js";
import ApexCharts from "apexcharts";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Gender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Female", "Male", "Non-Binary", "Other"],
        title: {
            text: "What gender do you identify as?",
            align: "center",
          },
      },
      series: [13, 6, 1],
    };
  }

  render() {
    return (
      <div className="Gender">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="500"
        />
      </div>
    );
  }
}

export default Gender;
