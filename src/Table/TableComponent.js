import React, {Component} from 'react';
import './style.css'
//import  {ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
export default class TableComponent extends Component {

    getMutualFund(mutualFund, key) {
      return <tr key = {key} className="table-row" onClick = {() =>this.props.onClick(key)}>
              <td>{mutualFund.fundName}</td>
              <td>{mutualFund.currentNav}</td>
              </tr>;

    }
  
  
    renderTables(mutualFunds) {
      if(!mutualFunds) return;
      let funds = []
      for(let i = 0, j = 0; i < mutualFunds.length; i++) {
          if(mutualFunds[i]) {
            funds[j++] = this.getMutualFund(mutualFunds[i], i);
          }
      }
      return funds;
    }

    render() {
       return(
          <div className = "w3-container table-container">
                    <table className="w3-table w3-bordered table-border w3-card-4">
          <tbody>
          <tr className="table-header">
            <th>Fund Name</th>
            <th>Current NAV</th>
          </tr>

            {this.renderTables(this.props.mutualFunds)}
          </tbody>
        </table>

          </div>
      
        )



    }
}





