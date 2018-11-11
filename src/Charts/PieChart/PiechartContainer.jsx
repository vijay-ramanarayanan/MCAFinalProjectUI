import React from "react";
import Chart from "react-google-charts";
import './style.css';

const pieOptions = {
  title: "",
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    },
    {
      color: "#ff4500"
    }
  ],
  legend: {
    position: "none",
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "80%",
    height: "80%"
  },
  fontName: "Roboto",
  backgroundColor: 'transparent'
};
export default class PieChart extends React.Component {
  state = {
    chartImageURI: ""
  };
  
  
  constructPieChart() {
    this.data = 
      [
        ["Fund Name","Amount"]
      ];
      let amt = this.props.totalAmount;
    
    let mutualFunds = this.props.mutualFunds;
    mutualFunds.sort(function(a, b) {
      return a.amountInvested - b.amountInvested;
    });

    if(mutualFunds.length > 4) {
      let len = mutualFunds.length, j, i;
      for(i = len-1, j = 1; i >=len-4; i--, j++) {
        this.data[j] = [mutualFunds[i].fundName, mutualFunds[i].amountInvested];
        amt -= mutualFunds[i].amountInvested;
      }
      this.data[j] = ["Others", amt];
    } else {
      for(let i = 0; i < mutualFunds.length; i++) {
        this.data[i+1] = [mutualFunds[i].fundName, mutualFunds[i].amountInvested]
      }
    }

  }
  
renderNoData() {
  return(
    <div style ={{margin: "auto", fontSize: "20px"}}>
      No Funds Currently
    </div>
  )
}

renderpieChart() {
  return (
    <div className="pie-chart">
      <Chart
        chartType="PieChart"
        options={pieOptions}
        data={this.data}
        graph_id="PieChart"
        width={"300px"}
        height={"300px"}
        legend_toggle
      />
    </div>
  );

}

  render() {
    this.constructPieChart();
    return this.data.length === 1 ? this.renderNoData() : this.renderpieChart()
  }
}
//          data={[["Age", "Weight"], ["a", 12], ["b", 5.5], ["c", 3.4]]}
