import React, {Component} from "react";
import Chart from "react-google-charts";


export default class Barchart extends Component {
  getData(mutualFunds) {
    let colors = ["orange", "red", "blue", "green", " #B84E4E" ];
    if(!mutualFunds || mutualFunds.length === 0) return

    let x = [];
    x[0] = ["Year", "Assets (in crore)", { role: "style" }];

    for(let i = 0; i < mutualFunds.length; i++) {
      const {fundName, asset} = mutualFunds[i]
      x[i+1] = [fundName, asset, colors[i]];
    }
    return x;
  }
  
  render() {
    let barData = this.getData(this.props.mutualFunds);
    return (
      <div className="w3-container">
        {barData && <Chart chartType="BarChart" width="100%" height="500px" data={this.getData(this.props.mutualFunds)}  bar= {{groupWidth: "195%"}}/>}
      </div>
    );
  }
}

