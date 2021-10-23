import "../App.js";
import ApexCharts from "apexcharts";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class HiddenCirriculum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Yes", "No", "Not aware of it"],
        title: {
          text: "Are you aware of the Hidden Cirriculum?",
          align: "center",
        },
            colors: ['#26f007', '#f01707', '#4a0404']
          
      },
      series: [1, 3, 16],
    };
  }

  render() {
    return (
      <div className="HiddenCirriculum">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="600"
        />
      </div>
    );
  }
}

export default HiddenCirriculum;
