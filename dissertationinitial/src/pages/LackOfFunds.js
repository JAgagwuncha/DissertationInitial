import "../App.js";
import ApexCharts from "apexcharts";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class LackOfFunds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Having to work", "Took breaks from studying", "Other"],
        title: {
            text: "How did a lack of funds affect your experience at UEA?",
            align: "center",
          },
      },
      series: [13, 3, 6],
    };
  }

  render() {
    return (
      <div className="LackOfFunds">
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

export default LackOfFunds;
